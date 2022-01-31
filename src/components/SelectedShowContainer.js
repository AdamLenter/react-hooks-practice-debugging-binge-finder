import React from "react";
import Episode from "./Episode";

function SelectedShowContainer(props) {
  
  function mapSeasons() {
    if (!!props.allEpisodes) {

      let seasons = [];
      for(let i = 0; i < props.allEpisodes.length; i++) {
        if(!seasons.includes(props.allEpisodes[i].season))
          {
          //The season is not in the array. Add it:
          seasons.push(props.allEpisodes[i].season);
          }
      }
      
      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
  }

  const filteredEpisodes = props.allEpisodes.filter((e) => e.season === props.selectedSeason);
  console.log(props.selectedSeason);
  // function mapEpisodes() {
  //   const filteredEpisodeList = props.allEpisodes.filter((e) => e.season === props.selectedSeason);
    
  //   return (filteredEpisodeList.map((e) => <Episode eachEpisode={e} key={e.id} />))
  // }

  function handleSelectionChange(e) {
    props.setSelectedSeason(e.target.value);
  }

  const { selectedShow } = props;

  return (
    <div style={{ position: "static" }}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select style={{ display: "block" }} onChange={handleSelectionChange} value = {props.selectedSeason}>
        {mapSeasons()}
      </select>
      {filteredEpisodes.map((e) => <Episode eachEpisode={e} key={e.id} />)}
    </div>
  );
}

export default SelectedShowContainer;

Array.prototype.unique = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
