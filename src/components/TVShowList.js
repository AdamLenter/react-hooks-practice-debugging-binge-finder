import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow"
function TVShowList(props) {
  function mapAllShows() {
    let displayedTVShowList = [];
    
    if (!!props.searchTerm) {
      displayedTVShowList = props.shows.filter((s) => s.name.toLowerCase().includes(props.searchTerm))
       }
    else {
      displayedTVShowList = [...props.shows];
    }
    
    return (
      displayedTVShowList.map((s) => (<TVShow show={s} key={s.id} selectShow={props.selectShow} />))
    )
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
