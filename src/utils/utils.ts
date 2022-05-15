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

const getTemperamentTmplStrs = () => {
  return [
    (temperament: string) => `Looking for a friend who's ${temperament}?`,
    (temperament: string) => `How about a doggo who's ${temperament}?`,
    (temperament: string) => `They're ${temperament}.`,
  ];
};

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
