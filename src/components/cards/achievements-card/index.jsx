import { Typography } from "@components/ui";

export const AchievementsCard = (props) => {
  // props
  const { counter, title, className } = props;

  return (
    <div
      className={
        className ? `${className} achievements__card` : "achievements__card"
      }
    >
      <div className="achievements__card-wrapper">
        <span className="achievements__card-counter">{counter}</span>
        <Typography className="achievements__card-title" weight="300" tag="p">
          {title}
        </Typography>
      </div>
    </div>
  );
};
