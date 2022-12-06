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
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users/users.service';
import { DeleteDialogComponent } from '../users/components/delete-dialog/delete-dialog.component';
import { UserFormComponent } from '../users/components/user-form/user-form.component';
import { RoomFormComponent } from './components/room-form/room-form.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'phone', 'actions'];
  dataSource!: MatTableDataSource<User>;
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((users) => {
      const userData = users;
      this.dataSource = new MatTableDataSource(userData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
      this.getUsers();
    });
  }

  openDialogDelete(user: User): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
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
