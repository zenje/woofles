import { DogImage } from '../types';
import { getTemperamentTmplStrs } from './constants';

type ListFormatOptions = {
  type?: 'conjunction' | 'disjunction' | 'unit';
  style?: 'long' | 'short' | 'narrow';
  localeMatcher?: 'lookup' | 'best fit';
};

declare namespace Intl {
  class ListFormat {
    constructor(locale: string, options: ListFormatOptions);
    public format: (items: Array<string>) => string;
  }
}

export const getTemperamentString = (temperament: string): string => {
  const words = temperament.split(', ').map((s) => s.trim());
  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });
  const formattedTemperament = formatter.format(words).toLowerCase();
  const tmplStrs = getTemperamentTmplStrs();
  const randIndex = Math.floor(Math.random() * tmplStrs.length);
  return tmplStrs[randIndex](formattedTemperament);
};

export const findRandomImageFromData = (
  images: DogImage[]
): DogImage | null => {
  return (
    images.find((image) => {
      return (
        image.width > 600 &&
        image.height > 600 &&
        Math.abs(image.width - image.height) /
          Math.min(image.width, image.height) <
          0.3
      );
    }) ?? null
  );
};
