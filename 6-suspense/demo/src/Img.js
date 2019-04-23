import React from "react";
import { unstable_createResource } from "react-cache";

const ImageResource = unstable_createResource(
  source =>
    new Promise(resolve => {
      const img = new Image();
      img.src = source;
      img.onload = resolve;
    })
);

// It will load the picture and only once the picture is in the cache it will display it.
function Img(props) {
  ImageResource.read(props.src);
  return <img src={props.src} alt={props.alt} />;
}

export default Img;

// import React from "react";

// const cache = {};

// // It will load the picture and only once the picture is in the cache it will display it.
// function Img(props) {
//   const image = cache[props.src];
//   if (!image) {
//     throw new Promise(resolve => {
//       const img = new Image();
//       img.src = props.src;
//       img.onload = () => {
//         cache[props.src] = "loaded";
//         resolve("loaded");
//       };
//     });
//   }
//   return <img src={props.src} alt={props.alt} />;
// }

// export default Img;
