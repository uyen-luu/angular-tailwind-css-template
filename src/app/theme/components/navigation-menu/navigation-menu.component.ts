import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @Input() isMobile = false;
  showMenu = false;
  menuItems = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/team', name: 'Team' },
    { path: '/project', name: 'Projects' },
    { path: '/calendar', name: 'Calendar' },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
