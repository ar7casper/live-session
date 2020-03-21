export interface Theme {
  palette: {
    primary: string;
    secondary: string;
  };
  gutters: {
    base: number;
  };
}

export const theme: Theme = {
  palette: {
    primary: 'coral',
    secondary: 'darkorchid',
  },
  gutters: {
    base: 8,
  },
};
