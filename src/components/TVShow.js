import React from "react";

function tvShow(props) {
  function handleSelectShow() {
    props.selectShow(props.show);
  }
  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={()=>handleSelectShow()} alt="" />
    </div>
  );
}

export default tvShow;
