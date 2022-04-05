import { ModuleWithProviders, NgModule } from '@angular/core';
import { ThemeModule } from '@app/theme/theme.module';

const PROVIDERS: any[] = [];

const COMPONENTS: any[] = [];

@NgModule({
  imports: [ThemeModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...PROVIDERS],
    } as ModuleWithProviders<SharedModule>;
  }
}
