export class User {
  id!: number | string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  password!: string;
  role!: string;
  isActive!: boolean;
}

export enum Profile {
  HotelManager = 'hotel-manager',
  HotelReservationsManager = 'hotel-reservations-manager',
  ProjectManager = 'project-manager',
}
