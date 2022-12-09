import { Profile, User } from 'src/app/core/models/user';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/app/core/models/reservation.model';
import { ReservationsService } from 'src/app/core/services/reservations/reservations.service';
import { TokenService } from 'src/app/core/services/token/token.service';
import { UpdateReservationComponent } from './components/update-reservation/update-reservation/update-reservation.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {
  currentUser!: User | null;
  displayedColumns: string[] = [
    'email',
    'dateDebut',
    'dateEnd',
    'phone',
    'status',
    'actions',
  ];
  dataSource!: MatTableDataSource<Reservation>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private tokenService: TokenService,
    private ReservationsService: ReservationsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getCurrentUser();
    this.getReservations();
  }

  getReservations(): void {
    this.ReservationsService.getReservations().subscribe((reservations) => {
      const data = reservations;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  isHotelReservationsManager(): boolean {
    return this.currentUser?.role === Profile.HotelReservationsManager;
  }

  openDialog(data: Reservation): void {
    const dialogRef = this.dialog.open(UpdateReservationComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getReservations();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
