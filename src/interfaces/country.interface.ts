interface Currency {
    code: string;
    name: string;
    symbol: string;
  }
  
  interface Coordinates {
    lat: number;
    lng: number;
  }
  
  export interface ICountry {
    name: string;
    isoCode: string;
    capital?: string;
    region?: string;
    subregion?: string;
    population?: number;
    area?: number;
    languages?: string[];
    currencies?: Currency[];
    flag?: string;
    timezones?: string[];
    borders?: string[];
    coordinates?: Coordinates;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface CountryQueryParams {
    page?: number;
    limit?: number;
    region?: string;
    language?: string;
    currency?: string;
    name?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }