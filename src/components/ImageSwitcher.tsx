import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type ImageSwitcherProps = Required<Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'>> & {
  lightSrc: string;
  darkSrc: string;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'loading'>;

export default function ImageSwitcher({
  lightSrc,
  darkSrc,
  alt,
  ...imageAttrs
}: ImageSwitcherProps): React.JSX.Element {
  const { colorMode } = useColorMode();

  const currentSrc = colorMode === 'dark' ? darkSrc : lightSrc;

  return <img src={currentSrc} alt={alt} {...imageAttrs} loading="lazy" />;
}
