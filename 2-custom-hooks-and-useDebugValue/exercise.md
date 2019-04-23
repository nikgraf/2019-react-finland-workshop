## Custom Hooks & useDebugValue

1. Create a custom hook `useMap` that includes the useRef & useEffect used inside the Map component.

It should be used like this:

```jsx
function Map() {
  const mapElement = useMap();

  return (
    <div
      ref={mapElement}
      style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
    />
  );
}
```
