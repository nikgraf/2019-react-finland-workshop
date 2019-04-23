## useRef & useEffect

1. Use useRef & useEffect to build a Map component. Use the [Leaflet](https://leafletjs.com/) or similar.

**Hint** You can use Leaflet from npm e.g.

```js
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const element = document.getElementById("map");
const map = Leaflet.map(element).setView([51.505, -0.09], 13);
Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
```
