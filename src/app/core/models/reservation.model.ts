export interface Reservation {
  id: number;
  start: string;
  end: string;
  roomsId: number;
  typeRoom: string;
  email: string;
  phone: string;
  status: 'pending' | 'rejected' | 'validated';
}
