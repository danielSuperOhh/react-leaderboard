import Card from "./IndividualCard";
import data from "../data.json";

const MVP = () => {
  const MVPScoreCard = data.MVPScore;

  return (
    <div className="cards-container">
      {MVPScoreCard.map(({ src, naming, score, track }, index) => (
        <Card
          src={src}
          naming={naming}
          score={score}
          track={track}
          key={index}
        />
      ))}
    </div>
  );
};

export default MVP;
