import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { DeleteDialogComponent } from 'src/app/features/admin/users/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  animal!: string;
  name!: string;
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
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '500px',
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getUsers();
      this.animal = result;
    });
  }

  openDialogDelete(user: User): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.animal = result;
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
