export const MOBILE_WIDTH: number = 800; // px

export const ORDERBOOK_LEVELS: number = 25; // rows count

export const groupOptions: {
  [key: string]: number[];
} = {
  PI_XBTUSD: [0.5, 1, 2.5],
  PI_ETHUSD: [0.05, 0.1, 0.25],
};

export const ProductIds: {
  [key: string]: string;
} = {
  XBTUSD: "PI_XBTUSD",
  ETHUSD: "PI_ETHUSD",
};

export const ProductsMap: {
  [key: string]: string;
} = {
  PI_XBTUSD: "PI_ETHUSD",
  PI_ETHUSD: "PI_XBTUSD",
};
