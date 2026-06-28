import { useState } from "react";
import type { SiteCopy } from "@/data/site";

type Props = {
  copy: SiteCopy["flavors"];
};

export default function FlavorsIsland({ copy }: Props) {
  const items = copy.items;
  const [active, setActive] = useState(
    Math.min(Math.max(copy.activeIndex, 0), items.length - 1),
  );

  const flavor = items[active];
  const [titleLead, ...titleRest] = flavor.name.split(" ");
  const titleAccent = titleRest.join(" ");

  return (
    <div className="flavors__inner">
      <div className="flavors__copy">
        <p className="gc-eyebrow">
          <span className="gc-eyebrow__num">{copy.index}</span>
          {copy.eyebrow}
        </p>
        <h2 className="flavors__title" key={`t-${flavor.id}`}>
          <span>{titleLead}</span>
          {titleAccent && <em>{titleAccent}</em>}
        </h2>
        <p className="flavors__body" key={`b-${flavor.id}`} style={{ animationDelay: "60ms" }}>
          {flavor.body}
        </p>
        <ul
          className="flavors__badges"
          key={`g-${flavor.id}`}
          style={{ animationDelay: "120ms" }}
          aria-label={`Detalles de ${flavor.name}`}
        >
          {flavor.badges.map((badge) => (
            <li className="gc-pill" key={badge}>
              {badge}
            </li>
          ))}
        </ul>
      </div>

      <div className="flavors__visual">
        <div className="flavors__stage">
          <div className="flavors__halo"></div>
          <div className="flavors__card" data-flavor={flavor.id}>
            <div className="flavors__chip-wrap" aria-hidden="true">
              <div className="flavors__chip" data-flavor={flavor.id} key={flavor.id}>
                <div className="flavors__chip-rings"></div>
              </div>
            </div>
            <p className="flavors__hover-note">{flavor.kicker}</p>
          </div>
        </div>

        <div className="flavors__picker">
          <p className="flavors__picker-label">Elige tu sabor</p>
          <div className="flavors__pills" role="tablist" aria-label="Elige un sabor">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                className="flavors__pill"
                data-active={index === active ? "true" : "false"}
                onClick={() => setActive(index)}
              >
                <span className="flavors__swatch" data-flavor={item.id} aria-hidden="true"></span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
