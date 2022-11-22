import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  opened: boolean = false;

  constructor() {}

  getOpenedValue(): boolean {
    return this.opened;
  }

  toggleMenu(): boolean {
    this.opened = !this.opened;
    return this.opened;
  }
}
