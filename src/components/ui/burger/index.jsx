import { useEffect } from "react";

export const Burger = ({ openMenu, isMenuOpen }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isMenuOpen]);

  return (
    <button type="button" onClick={openMenu} className="burger stack center">
      <div className="burger__lines">
        <span></span>
      </div>
    </button>
  );
};
