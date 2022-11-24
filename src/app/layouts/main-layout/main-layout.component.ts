import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  opened!: boolean;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.opened = this.menuService.opened;
  }

  toggleMenu(event: boolean) {
    this.opened = event;
  }
}
