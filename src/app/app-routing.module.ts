//app-routing.module.ts- Module which handles various routes in  learning client application ///

//including required services and modules 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { SearchComponent } from './search/search.component';

import { AuthGuardService } from './auth-guard.service';


//assigning all possible routes to variable 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },   
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [AuthGuardService],
  },
 
  {
    path: '**',
    redirectTo: '',
  },
];

//decorator to import and export routing Module in the application 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
