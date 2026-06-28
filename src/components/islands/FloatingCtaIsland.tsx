import { useEffect, useState } from "react";

type Props = {
  cta: {
    href: string;
    label: string;
  };
};

export default function FloatingCtaIsland({ cta }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.45);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      className="floating-cta gc-btn gc-btn--primary"
      href={cta.href}
      data-visible={visible ? "true" : "false"}
    >
      {cta.label}
    </a>
  );
}
