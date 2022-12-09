import { TokenService } from './../../../core/services/token/token.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'src/app/core/models/room.model';
import { Profile, User } from 'src/app/core/models/user';
import { RoomService } from 'src/app/core/services/room/room.service';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { RoomFormComponent } from './components/room-form/room-form.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  currentUser!: User | null;
  displayedColumns: string[] = [
    'title',
    'placeNumber',
    'pricePerNight',
    'typeRoom',
    'date',
    'actions',
  ];
  dataSource!: MatTableDataSource<Room>;
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private tokenService: TokenService,
    public dialog: MatDialog,
    private roomService: RoomService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentUser = this.tokenService.getCurrentUser();
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRooms().subscribe((rooms: Room[]) => {
      const roomData = rooms;
      this.dataSource = new MatTableDataSource(roomData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  isHotelManager(): boolean {
    return this.currentUser?.role === Profile.HotelManager;
  }

  isHotelReservationsManager(): boolean {
    return this.currentUser?.role === Profile.HotelReservationsManager;
  }

  isProjectmanager(): boolean {
    return this.currentUser?.role === Profile.ProjectManager;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(data?: User): void {
    const dialogRef = this.dialog.open(RoomFormComponent, {
      width: '500px',
      data,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getRooms();
    });
  }

  openDialogDelete(room: Room): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: room,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getRooms();
    });
  }

  updateUser(user: User) {
    this.openDialog(user);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
