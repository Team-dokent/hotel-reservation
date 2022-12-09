export interface Room {
  id: number | string;
  title: string;
  image: string;
  description: string;
  pricePerNight: number;
  adult: number;
  children: number;
  typeRoom: string;
  createdAt: Date;
  placeNumber: number;
  available: number;
}
