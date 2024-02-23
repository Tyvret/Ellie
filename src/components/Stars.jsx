import React, { useEffect } from "react";

export function Stars() {
  useEffect(() => {
    const numStars = 200;

    function randomPosition() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return { x, y };
    }

    for (let i = 0; i < numStars; i++) {
      const { x, y } = randomPosition();
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      document.getElementById("stars").appendChild(star);
    }
  }, []);

  return <div id="stars"></div>;
}
