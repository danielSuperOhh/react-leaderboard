import React, { useState, useEffect } from "react";
import data from "../data.json";
import IndividualCard from "./IndividualCard";

const Geniescoreboard = () => {
  const scoreboard = data.geniescoreboard;
  const menuBtn = ["All", "UI/UX", "Web3", "FrontEnd", "BackEnd"];
  const [rendertracks, setRenderTracks] = useState(scoreboard);
  const [sortitem, setSortItem] = useState("All");

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (sortitem.toLocaleLowerCase() === "all") {
        setSortItem("all");
        return setRenderTracks(scoreboard);
      } else if (sortitem.toLocaleLowerCase() === "ui/ux") {
        setSortItem("ui/ux");
        let newArr = scoreboard.filter(
          (item) =>
            item.category.toLocaleLowerCase() === sortitem.toLocaleLowerCase()
        );
        return setRenderTracks(newArr);
      } else if (sortitem.toLocaleLowerCase() === "web3") {
        setSortItem("web3");
        let newArr = scoreboard.filter(
          (item) =>
            item.category.toLocaleLowerCase() === sortitem.toLocaleLowerCase()
        );
        return setRenderTracks(newArr);
      } else if (sortitem.toLocaleLowerCase() === "frontend") {
        setSortItem("frontend");
        let newArr = scoreboard.filter(
          (item) =>
            item.category.toLocaleLowerCase() === sortitem.toLocaleLowerCase()
        );
        return setRenderTracks(newArr);
      } else if (sortitem.toLocaleLowerCase() === "backend") {
        setSortItem("backend");
        let newArr = scoreboard.filter(
          (item) =>
            item.category.toLocaleLowerCase() === sortitem.toLocaleLowerCase()
        );
        console.log(newArr, sortitem);
        return setRenderTracks(newArr);
      }
    }

    return () => {
      mounted = false;
    };
  }, [sortitem]);

  const handleSort = (item) => {
    return setSortItem(item);
  };

  return (
    <div className="flex-col">
      <div className="btn-section">
        <div className="btn-container">
          {menuBtn.map((item, index) => (
            <div
              className={`primary-btn ${
                sortitem.toLocaleLowerCase() === item.toLocaleLowerCase() &&
                "active"
              }`}
              key={index}
              onClick={() => handleSort(item)}
            >
              {" "}
              {item}{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="cards-container">
        {rendertracks.map(({ naming, src, score, track, position }, index) => (
          <IndividualCard
            naming={naming}
            src={src}
            score={score}
            track={track}
            position={position}
            key={index}
            rendertracks={rendertracks}
          />
        ))}
      </div>
    </div>
  );
};

export default Geniescoreboard;