import React from "react";

const ImageSwitcher = ({ lightSrc, darkSrc }: { lightSrc: string; darkSrc: string }) => {
  // Switch between light and dark images based on the theme
  const source = localStorage.getItem("starlight-theme") === "dark" ? darkSrc : lightSrc;

  // Update if the theme changes
  window.addEventListener("storage", (e) => {
    if (e.key === "starlight-theme") {
      const newSource = e.newValue === "dark" ? darkSrc : lightSrc;
      document.querySelector("img")!.setAttribute("src", newSource);
    }
  });

  return <img src={source} alt="Image switcher" />;
};

export default ImageSwitcher;
