import React from "react";

function MyButton() {
  const clicked = () => {
    alert("Button has been clicked");
  };
  return (
    <div>
      <button onClick={clicked}>My button</button>
    </div>
  );
}

export default MyButton;
