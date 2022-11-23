import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  opened!: boolean;

  @Output() openedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.opened = this.menuService.opened;
  }

  toggleMenuEvent() {
    this.opened = this.menuService.toggleMenu();
    this.openedEvent.emit(this.opened);
  }
}
