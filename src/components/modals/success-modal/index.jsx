import { useEffect, useRef } from "react";

//UI
import { Button, Image, Typography } from "@components/ui";

// Hooks
import { useOnClickOutside, useTranslation } from "@hooks";

export const SuccessModal = (props) => {
  //**props
  const { active, setActive } = props;

  //** body add class
  useEffect(() => {
    if (active) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }

    return () => {
      document.body.classList.remove("lock");
    };
  }, [active]);

  //ClickOutside
  const ref = useRef();
  useOnClickOutside(ref, () => setActive(false));

  //translation
  const t = useTranslation();

  return (
    <div
      className={
        active ? "modal modal--active stack center" : "modal stack center"
      }
    >
      <div
        ref={ref}
        className="success__modal modal__content stack column"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close"
          onClick={() => setActive(false)}
        ></button>
        <div className="success__modal-wrapper stack column center">
          <Typography
            className="success__modal-title"
            weight="400"
            tag="h3"
            variant="h3"
            upperCase
            center
          >
            {t.title.thank}
          </Typography>
          <Image
            className="success__modal-image"
            src="/img/ui/u_success.png"
            width="306"
            height="230"
            alt="Success done icon"
          />
          <div className="success__modal-botton-text stack column">
            <Typography
              className="success__modal-subtitle"
              tag="h4"
              weight="300"
              variant="h2"
              upperCase
              center
            >
              {t.subtitle.submit}
            </Typography>
            <Typography
              className="success__modal-text"
              weight="300"
              tag="p"
              upperCase
              center
            >
              {t.subtitle.getback}
            </Typography>
          </div>
          <Button
            className="success__modal-button"
            upperCase
            text={t.actions.gotit}
            onClick={()=>setActive(false)}
          />
        </div>
      </div>
    </div>
  );
};
