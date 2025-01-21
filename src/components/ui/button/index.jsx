import { useEffect, useState } from "react";
import Link from "next/link";

// Hooks
import useDarkMode from "use-dark-mode";

export const Button = (props) => {
  const {
    tag = "button",
    variant = "accent",
    size = "M",
    text,
    href,
    onClick,
    className,
    upperCase,
    arrowDark = false,
    disabled = false,
    type = "button",
  } = props;

  const darkMode = useDarkMode(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Tag = tag || "button";

  const getClasses = () => {
    let classes = className ? `${className} button` : "button";

    const VARIANT = {
      transparent: " button--transparent",
      accent: " button--accent",
      white: " button--white",
    };

    const SIZE = {
      M: " button--medium",
      S: " button--small",
    };

    classes += variant ? VARIANT?.[variant] : "";
    classes += size ? SIZE?.[size] : "";

    if (typeof upperCase === "boolean") {
      classes += " button--uppercase";
    }

    return classes;
  };

  const getArrowFill = () => {
    if (variant === "white") return "var(--clr-default-500)";
    if (isHovered && arrowDark) return "var(--clr-hover-transparent-color)";
    if (!arrowDark) return "var(--clr-default-100)";
    return darkMode.value ? "var(--clr-default-100)" : "var(--clr-default-500)";
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (href) {
    return (
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={getClasses()}
        href={href}
        disabled={disabled}
      >
        <span>{text}</span>

        <span className="button__arrow">
          {isMounted && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_178_4246)">
                <path
                  d="M9.6 1.6001L8.48 2.7201L12.96 7.2001H0V8.8001H12.96L8.48 13.2801L9.6 14.4001L16 8.0001L9.6 1.6001Z"
                  fill={getArrowFill()}
                />
              </g>
              <defs>
                <clipPath id="clip0_178_4246">
                  <rect width="16" height="16" fill={getArrowFill()} />
                </clipPath>
              </defs>
            </svg>
          )}
        </span>
      </Link>
    );
  }

  return (
    <Tag
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={getClasses()}
      type={type}
      disabled={disabled}
    >
      <span>{text}</span>

      <span className="button__arrow">
        {isMounted && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_178_4246)">
              <path
                d="M9.6 1.6001L8.48 2.7201L12.96 7.2001H0V8.8001H12.96L8.48 13.2801L9.6 14.4001L16 8.0001L9.6 1.6001Z"
                fill={getArrowFill()}
              />
            </g>
            <defs>
              <clipPath id="clip0_178_4246">
                <rect width="16" height="16" fill={getArrowFill()} />
              </clipPath>
            </defs>
          </svg>
        )}
      </span>
    </Tag>
  );
};
