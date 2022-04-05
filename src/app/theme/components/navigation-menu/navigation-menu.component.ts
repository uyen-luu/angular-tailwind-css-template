import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @Input() isMobile = false;
  showMenu = false;
  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
