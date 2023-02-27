
const IndividualCard = ({ src, naming, score, track, position }) => {
  return (
    <div className="cards-container">
      <div className="individual-cards">
        <div className="image-container">
          <img src={src} alt="profile-header" />
        </div>
        <div className="content">
          <h1 className="name">{naming}</h1>
          <h1 className="score">{score} </h1>
          <h1 className="track">{track}</h1>
          <h1 className="position">{position}</h1>
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;
