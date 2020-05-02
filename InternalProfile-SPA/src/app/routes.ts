import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrentOpeningsComponent } from './current-openings/current-openings.component';
import { SelectedOpeningsComponent } from './selected-openings/selected-openings.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'openings', component: CurrentOpeningsComponent, canActivate: [AuthGuard]},
    { path: 'shortlist', component: SelectedOpeningsComponent, canActivate: [AuthGuard]},
    { path: 'notes', component: MessagesComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
