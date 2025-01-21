import { Button, Typography } from '@components/ui';
import { useTranslation } from '@hooks';

export const PlanCard = (props) => {
  const { tariff, price, list, featuresTitle, featuresList, label, labelQuick, twoButton, setModalConsultActive } =
    props;

  const tariffClasses = {
    basic: 'basic',
    normal: 'normal',
    medium: 'medium',
    premium: 'premium',
    enterprise: 'enterprise'
  };

  const topClassName = `plan-card__top stack column ${
    tariffClasses[tariff] ? `plan-card__top--${tariffClasses[tariff]}` : ''
  }`;

  const t = useTranslation();

  return (
    <div className="plan-card stack column">
      {labelQuick && (
        <Typography tag="span" weight="500" className="label stack align-center" upperCase>
          <img src="/img/ui/u_rocket.svg" width="16" height="16" alt="icon" />
          quick setup
        </Typography>
      )}
      {label && (
        <Typography tag="span" weight="500" className="label" upperCase>
          TOP
        </Typography>
      )}
      <div className={topClassName}>
        <Typography className="plan-card__tarif" weight="300" upperCase center>
          {tariff}
        </Typography>
        <Typography className="plan-card__price" weight="500" center>
          $ {price}
        </Typography>
        <Typography className="plan-card__period" weight="300" upperCase center>
          Monthly
        </Typography>
      </div>
      <ul className="plan-card__list stack column">
        {list?.map((item, index) => (
          <li key={index} className="plan-card__item stack align-center">
            <span className="stack center icon">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.06335 5.88441C2.98699 5.9586 2.8828 6 2.77457 6C2.66634 6 2.56215 5.9586 2.48579 5.88441L0.179506 3.65644C-0.0598354 3.42526 -0.0598354 3.05039 0.179506 2.81965L0.468287 2.54064C0.707704 2.30947 1.09536 2.30947 1.3347 2.54064L2.77457 3.93147L6.6653 0.173383C6.90471 -0.0577944 7.29274 -0.0577944 7.53171 0.173383L7.82049 0.452386C8.05984 0.683564 8.05984 1.05836 7.82049 1.28918L3.06335 5.88441Z"
                  fill="white"
                />
              </svg>
            </span>
            <Typography
              className="plan-card__item-text"
              weight="300"
              dangerouslySetInnerHTML={{
                __html: t.subtitle[item]?.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                  return `<span>${captureGroup}</span>`;
                })
              }}
              tag="p"
            ></Typography>
          </li>
        ))}
      </ul>
      {featuresList && (
        <div className="plan-card__features stack column">
          <Typography
            className="plan-card__features-title"
            weight="300"
            upperCase
            dangerouslySetInnerHTML={{
              __html: t.title[featuresTitle]?.replace(/\{\{([^}]*)\}\}/g, (__, captureGroup) => {
                return `<span>${captureGroup}</span>`;
              })
            }}
          ></Typography>

          <ul className="plan-card__features-list stack column">
            {featuresList?.map((item, index) => (
              <li key={index} className="plan-card__item stack align-center">
                <span className="stack center icon">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.06335 5.88441C2.98699 5.9586 2.8828 6 2.77457 6C2.66634 6 2.56215 5.9586 2.48579 5.88441L0.179506 3.65644C-0.0598354 3.42526 -0.0598354 3.05039 0.179506 2.81965L0.468287 2.54064C0.707704 2.30947 1.09536 2.30947 1.3347 2.54064L2.77457 3.93147L6.6653 0.173383C6.90471 -0.0577944 7.29274 -0.0577944 7.53171 0.173383L7.82049 0.452386C8.05984 0.683564 8.05984 1.05836 7.82049 1.28918L3.06335 5.88441Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <Typography tag="p">{t.subtitle[item]}</Typography>
              </li>
            ))}
          </ul>
        </div>
      )}

      {twoButton && twoButton ? (
        <div className="plan-card__buttons stack">
          <Button
            className="plan-card__button plan-card__button--details"
            variant="transparent"
            upperCase
            text={t.actions.details}
          />
          <Button className="plan-card__button plan-card__button--buy" upperCase text={t.actions.buy} />
        </div>
      ) : (
        <Button
          onClick={() => setModalConsultActive(true)}
          className="plan-card__button"
          accent
          upperCase
          text={t.actions.activate}
        />
      )}
    </div>
  );
};
