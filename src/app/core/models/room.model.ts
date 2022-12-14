export interface Room {
  id: number | string;
  title: string;
  image: string;
  description: string;
  pricePerNight: number;
  adult: number;
  children: number;
  typeRoom: string;
  available: number;
  placeNumber: number;
  createdAt: Date;
}
