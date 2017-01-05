import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '**',    component: NoContentComponent },
];
