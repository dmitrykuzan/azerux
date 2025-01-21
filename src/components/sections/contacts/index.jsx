// UI Components
import { Container, Typography } from "@components/ui";

// Components
import { ContactCard } from "@components/cards";

// Hooks
import { useTranslation } from "@hooks";

export const Contact = () => {
  const t = useTranslation();

  return (
    <section className="contacts" id="contacts">
      <Container>
        <div className="contacts__wrapper stack column">
          <div className="contacts__text stack column">
            <Typography
              className="contacts__title"
              tag="h2"
              variant="h1"
              weight="300"
              upperCase
              center
            >
              {t.title.contact}
            </Typography>
            <Typography
              className="contacts__description"
              tag="p"
              color="opacity70"
              weight="300"
              center
            >
              {t.subtitle.join}
            </Typography>
          </div>

          <ul className="contacts__list stack justify-center">
            <li className="contacts__item">
              <ContactCard
                text={t.actions.asgardcyber}
                srcIconLight="/img/contacts/c_x-dark.svg"
                srcIconDark="/img/contacts/c_x-light.svg"
                link="https://x.com/azerux"
              />
            </li>
            <li className="contacts__item">
              <ContactCard
                text={t.actions.instagram}
                srcIconLight="/img/contacts/c_instagram-light.svg"
                srcIconDark="/img/contacts/c_instagram-light.svg"
                link="https://www.instagram.com/azerux.cybersecurity/"
              />
            </li>
          {/*   <li className="contacts__item">
              <ContactCard
                text={t.actions.cyberasgard}
                srcIconLight="/img/contacts/c_reddit.svg"
                srcIconDark="/img/contacts/c_reddit.svg"
                link="https://web.telegram.org/k/"
              />
            </li> */}
            <li className="contacts__item">
              <ContactCard
                text={t.actions.cyberasgard}
                srcIconLight="/img/contacts/c_linkedin-light.svg"
                srcIconDark="/img/contacts/c_linkedin-light.svg"
                link="https://www.linkedin.com/company/azerux"
              />
            </li>
            <li className="contacts__item">
              <ContactCard
                text={t.actions.email}
                srcIconLight="/img/contacts/c_mail-dark.svg"
                srcIconDark="/img/contacts/c_mail-light.svg"
                link="mailto:sales@azerux.com"
              />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
