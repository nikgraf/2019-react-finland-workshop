import React from "react";

function AvatarFallback(props) {
  return (
    <svg height="64" width="64">
      <rect fill="#a0d36a" x="0" y="0" height="64" width="64" />
      <text
        class="avatar-icon"
        fill="#ffffff"
        font-size="70"
        text-anchor="middle"
        x="30"
        y="50"
      >
        ☻
      </text>
    </svg>
  );
}

export default AvatarFallback;
