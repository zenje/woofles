import { Breed, DogImage, LabelValue } from '../types';
import { BREED_INFO, getTemperamentTmplStrs } from './constants';

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

export const getInfoLabelValuesFromBreedData = (data: Breed): LabelValue[] => {
  return [
    { label: BREED_INFO.ORIGIN, value: data.origin },
    { label: BREED_INFO.BRED_FOR, value: data.bred_for },
    { label: BREED_INFO.BREED_GROUP, value: data.breed_group },
    { label: BREED_INFO.TEMPERAMENT, value: data.temperament },
    { label: BREED_INFO.LIFE_SPAN, value: data.life_span },
    {
      label: BREED_INFO.HEIGHT,
      value: data.height
        ? `${data.height.imperial} in (${data.height.metric} cm)`
        : null,
    },
    {
      label: BREED_INFO.WEIGHT,
      value: data.weight
        ? `${data.weight.imperial} lbs (${data.height.metric} kg)`
        : null,
    },
  ];
};
