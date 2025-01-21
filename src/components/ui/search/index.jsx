import { useTranslation } from "@hooks";

export const Search = () => {
  const t = useTranslation();

  return (
    <div className="search">
      <input
        className="search__input"
        placeholder={t.labels.search}
        type="search"
        name="search"
      />
      <button className="search__button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="var(--clr-default-435)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="1" clipPath="url(#clip0_318_6390)">
            <path
              d="M15.6211 13.6849L11.9426 10.0062C12.5676 9.01114 12.9303 7.83508 12.9303 6.57294C12.9303 3.0022 10.0356 0.10791 6.46503 0.10791C2.89442 0.10791 0 3.0022 0 6.57294C0 10.1438 2.89429 13.0378 6.46503 13.0378C7.83856 13.0378 9.1108 12.6084 10.1577 11.8788L13.7924 15.5138C14.045 15.766 14.3761 15.8917 14.7068 15.8917C15.0378 15.8917 15.3685 15.766 15.6215 15.5138C16.1262 15.0085 16.1262 14.1901 15.6211 13.6849ZM6.46503 10.9433C4.05162 10.9433 2.09498 8.98676 2.09498 6.57321C2.09498 4.15967 4.05162 2.20303 6.46503 2.20303C8.87858 2.20303 10.8351 4.15967 10.8351 6.57321C10.8351 8.98676 8.87858 10.9433 6.46503 10.9433Z"
              fill="var(--clr-default-435)"
            />
          </g>
          <defs>
            <clipPath id="clip0_318_6390">
              <rect width="16" height="16" fill="var(--clr-default-435)" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};
