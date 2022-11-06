export type ICar = {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[];
  photos: string[];
};

export type RentalPeriod = {
  startFormatted: string;
  endFormatted: string;
};

export type Params = {
  car: ICar;
  dates?: string[];
};
