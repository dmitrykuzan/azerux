import { useRef, useState } from "react";
import { useTranslation, useOnClickOutside } from "@hooks";
import { Typography } from "@components/ui";

export const Sort = () => {
  const t = useTranslation();

  //active dropdown
  const [active, setActive] = useState(true);
  const toggleSort = () => setActive(!active);
  //active dropdown

  // Selected option
  const [selectedOption, setSelectedOption] = useState("Last on top");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActive(true);
  };
  // Selected option

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(true));
  //ClickOutside

  return (
    <div
      className={`sort stack align-center ${active ? "" : "sort--active"}`}
      ref={ref}
    >
      <Typography className="sort__label" weight="400" tag="span">
        {t.labels.sort}
      </Typography>
      <div className="sort__dropdown">
        <button
          className="sort__dropdown-selected stack align-center"
          onClick={toggleSort}
        >
          <span className="sort__dropdown-value">{selectedOption}</span>
          <span className="sort__dropdown-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M15 5.19149L13.775 4L8.875 8.76596L8.00011 9.5L7.125 8.76596L2.225 4L1 5.19149L8 12L15 5.19149Z"
                  fill=""
                />
              </g>
            </svg>
          </span>
        </button>
        <ul className="sort__dropdown-options stack column">
          {["Last on top", "First on top", "First on bot"].map((option) => (
            <li
              key={option}
              className="sort__dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
