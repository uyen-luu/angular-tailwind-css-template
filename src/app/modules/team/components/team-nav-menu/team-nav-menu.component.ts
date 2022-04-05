import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-nav-menu',
  templateUrl: './team-nav-menu.component.html',
  styleUrls: ['./team-nav-menu.component.scss'],
})
export class TeamNavMenuComponent implements OnInit {
  menuItems = [
    { path: '/team/list', name: 'List' },
    { path: '/team/detail', name: 'Detail' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
