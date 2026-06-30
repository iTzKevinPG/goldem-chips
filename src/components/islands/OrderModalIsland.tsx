import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { SiteCopy } from "@/data/site";
import {
  buildOrderMessage,
  buildWhatsappUrl,
  type OrderLine,
} from "@/utils/whatsapp";

type Props = {
  copy: SiteCopy["orderForm"];
  flavors: SiteCopy["flavors"]["items"];
  phone: string;
  triggerLabel: string;
};

type ContactErrors = {
  name?: boolean;
  phone?: boolean;
  address?: boolean;
  neighborhood?: boolean;
  flavors?: boolean;
};

const emptyContact = { name: "", phone: "", address: "", neighborhood: "" };

export default function OrderModalIsland({
  copy,
  flavors,
  phone,
  triggerLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(emptyContact);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [errors, setErrors] = useState<ContactErrors>({});
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Bloquea el scroll del body y pausa Lenis mientras el modal está abierto.
  useEffect(() => {
    if (!open) return;

    window.__lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    firstFieldRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.__lenis?.start();
    };
  }, [open]);

  const total = flavors.reduce(
    (sum, flavor) => sum + (quantities[flavor.id] ?? 0),
    0,
  );

  const setQuantity = (id: string, next: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, next) }));
  };

  const updateContact = (key: keyof typeof emptyContact, value: string) => {
    setContact((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    const phoneDigits = contact.phone.replace(/\D/g, "");
    const next: ContactErrors = {
      name: contact.name.trim() === "",
      phone: phoneDigits.length < 7,
      address: contact.address.trim() === "",
      neighborhood: contact.neighborhood.trim() === "",
      flavors: total < 1,
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const lines: OrderLine[] = flavors
      .filter((flavor) => (quantities[flavor.id] ?? 0) > 0)
      .map((flavor) => ({
        name: flavor.name,
        quantity: quantities[flavor.id] ?? 0,
      }));

    const message = buildOrderMessage(
      copy,
      {
        name: contact.name.trim(),
        phone: contact.phone.trim(),
        address: contact.address.trim(),
        neighborhood: contact.neighborhood.trim(),
      },
      lines,
    );

    window.open(buildWhatsappUrl(phone, message), "_blank", "noopener");
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="gc-btn final-cta__primary"
        onClick={() => setOpen(true)}
      >
        {triggerLabel}
      </button>

      {open &&
        createPortal(
          <div
            className="order-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
          >
          <div
            className="order-modal__backdrop"
            onClick={() => setOpen(false)}
          />
          <div className="order-modal__panel" role="document" data-lenis-prevent>
            <button
              type="button"
              className="order-modal__close"
              aria-label={copy.closeLabel}
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            <h2 className="order-modal__title" id="order-modal-title">
              {copy.title}
            </h2>
            <p className="order-modal__subtitle">{copy.subtitle}</p>

            <form
              className="order-modal__form"
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
              noValidate
            >
              <div className="order-modal__grid">
                <label className="order-modal__field">
                  <span className="order-modal__label">
                    {copy.fields.name.label}
                  </span>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    className="order-modal__input"
                    data-error={errors.name ? "true" : "false"}
                    placeholder={copy.fields.name.placeholder}
                    value={contact.name}
                    onChange={(e) => updateContact("name", e.target.value)}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className="order-modal__error">{copy.errors.name}</span>
                  )}
                </label>

                <label className="order-modal__field">
                  <span className="order-modal__label">
                    {copy.fields.phone.label}
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    className="order-modal__input"
                    data-error={errors.phone ? "true" : "false"}
                    placeholder={copy.fields.phone.placeholder}
                    value={contact.phone}
                    onChange={(e) => updateContact("phone", e.target.value)}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <span className="order-modal__error">
                      {copy.errors.phone}
                    </span>
                  )}
                </label>

                <label className="order-modal__field order-modal__field--full">
                  <span className="order-modal__label">
                    {copy.fields.address.label}
                  </span>
                  <input
                    type="text"
                    className="order-modal__input"
                    data-error={errors.address ? "true" : "false"}
                    placeholder={copy.fields.address.placeholder}
                    value={contact.address}
                    onChange={(e) => updateContact("address", e.target.value)}
                    autoComplete="street-address"
                  />
                  {errors.address && (
                    <span className="order-modal__error">
                      {copy.errors.address}
                    </span>
                  )}
                </label>

                <label className="order-modal__field order-modal__field--full">
                  <span className="order-modal__label">
                    {copy.fields.neighborhood.label}
                  </span>
                  <input
                    type="text"
                    className="order-modal__input"
                    data-error={errors.neighborhood ? "true" : "false"}
                    placeholder={copy.fields.neighborhood.placeholder}
                    value={contact.neighborhood}
                    onChange={(e) =>
                      updateContact("neighborhood", e.target.value)
                    }
                  />
                  {errors.neighborhood && (
                    <span className="order-modal__error">
                      {copy.errors.neighborhood}
                    </span>
                  )}
                </label>
              </div>

              <div className="order-modal__flavors">
                <div className="order-modal__flavors-head">
                  <span className="order-modal__label">{copy.flavorsLabel}</span>
                  <span className="order-modal__hint">{copy.flavorsHint}</span>
                </div>
                {errors.flavors && (
                  <span className="order-modal__error">{copy.errors.flavors}</span>
                )}
                <ul className="order-modal__flavor-list">
                  {flavors.map((flavor) => {
                    const qty = quantities[flavor.id] ?? 0;
                    return (
                      <li className="order-modal__flavor" key={flavor.id}>
                        <span className="order-modal__flavor-name">
                          {flavor.name}
                        </span>
                        <div className="order-modal__stepper">
                          <button
                            type="button"
                            className="order-modal__step"
                            aria-label={`Quitar un ${flavor.name}`}
                            onClick={() => setQuantity(flavor.id, qty - 1)}
                            disabled={qty === 0}
                          >
                            &minus;
                          </button>
                          <span
                            className="order-modal__qty"
                            aria-live="polite"
                            data-active={qty > 0 ? "true" : "false"}
                          >
                            {qty}
                          </span>
                          <button
                            type="button"
                            className="order-modal__step"
                            aria-label={`Agregar un ${flavor.name}`}
                            onClick={() => setQuantity(flavor.id, qty + 1)}
                          >
                            +
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="order-modal__footer">
                <span className="order-modal__total">
                  {copy.totalLabel}: <strong>{total}</strong>{" "}
                  {total === 1 ? copy.packagesWord.one : copy.packagesWord.many}
                </span>
                <div className="order-modal__actions">
                  <button
                    type="button"
                    className="gc-btn final-cta__secondary"
                    onClick={() => setOpen(false)}
                  >
                    {copy.cancelLabel}
                  </button>
                  <button type="submit" className="gc-btn final-cta__primary">
                    {copy.submitLabel}
                  </button>
                </div>
              </div>
            </form>
          </div>
          </div>,
          document.body,
        )}
    </>
  );
}
