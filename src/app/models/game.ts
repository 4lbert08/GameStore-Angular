export interface Game {
  id: string;
  name: string;
  available: boolean;
  description: string;
  discount: number;
  gameCover: string;
  genres: string[];
  images: string[];
  pegi: number;
  platform: string;
  price: number;
  releaseDate: string;
  system: string;
  trailer: string;
}
