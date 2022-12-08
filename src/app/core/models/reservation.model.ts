export interface Reservation {
  id: number;
  dateStart: string;
  dateEnd: string;
  roomsId: number;
  typeRoom: string;
  email: string;
  phone: string;
  status: 'pending' | 'rejected' | 'validated';
}
