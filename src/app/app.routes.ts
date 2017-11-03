import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GanhadoresComponent } from './ganhadores/ganhadores.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},    
    {path: 'ganhadores', component: GanhadoresComponent}
];
