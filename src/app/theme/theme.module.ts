import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  FooterComponent,
  HeaderComponent,
  NavigationMenuComponent,
  AuthorizedLayoutComponent,
  GuestLayoutComponent,
  ProfileButtonComponent,
  NotificationButtonComponent,
  LogoComponent,
  MenuToggleButtonComponent,
} from '@app/theme/components';

const UI_MODULES = [FontAwesomeModule];
//
const BASE_MODULES = [CommonModule];

// Components for this module only
const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  HeaderComponent,
  FooterComponent,
  NavigationMenuComponent,
  AuthorizedLayoutComponent,
  GuestLayoutComponent,
  ProfileButtonComponent,
  NotificationButtonComponent,
  LogoComponent,
  MenuToggleButtonComponent
];
const DIRECTIVES: any[] = [];
//
const PIPES: any[] = [];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...BASE_MODULES, ...UI_MODULES],
  exports: [
    ...UI_MODULES,
    ...BASE_MODULES,
    ...DIRECTIVES,
    ...PIPES,
    ...COMPONENTS,
  ],
})
export class ThemeModule {}
