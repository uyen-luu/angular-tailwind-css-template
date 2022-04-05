import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ScrollbarComponent,
} from '@app/theme/components';

// External UI frames
const UI_MODULES: any[] = [];
//
const BASE_MODULES = [CommonModule];

// Own components of the theme, shouldn't contains any business logic
// If you're going to to define any objects which contains business logic, it should be defined in shared module.
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
  MenuToggleButtonComponent,
  ScrollbarComponent
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
