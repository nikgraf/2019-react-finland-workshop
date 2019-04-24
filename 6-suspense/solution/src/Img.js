import React from "react";

const cache = {};

// It will load the picture and only once the picture is in the cache it will display it.
function Img(props) {
  const image = cache[props.src];
  if (!image) {
    throw new Promise(resolve => {
      const img = new Image();
      img.src = props.src;
      img.onload = () => {
        cache[props.src] = "loaded";
        resolve("loaded");
      };
    });
  }
  return <img src={props.src} alt={props.alt} width="64" />;
}

export default Img;
