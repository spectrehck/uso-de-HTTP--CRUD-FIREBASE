import { Routes, RouterModule } from '@angular/router';


import { CelularesComponent } from './components/celulares/celulares.component';
import { CelularComponent } from './components/celulares/celular.component';

const app_routes: Routes = [
    { path: 'celulares', component: CelularesComponent },
    { path: 'celular/:id', component: CelularComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'celulares' },

];


export const APP_ROUTING = RouterModule.forRoot(app_routes);
