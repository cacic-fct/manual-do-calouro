import { useColorMode } from "@docusaurus/theme-common";

const ImageSwitcher = ({ lightImageSrc, darkImageSrc }: { lightImageSrc: string; darkImageSrc: string }) => {
  const { colorMode } = useColorMode();

  return <img src={colorMode === "dark" ? darkImageSrc : lightImageSrc} alt="ImageSwitcher" />;
};

export default ImageSwitcher;
