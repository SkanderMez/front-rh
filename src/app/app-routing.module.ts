import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneProfileComponent} from './profile/one-profile/one-profile.component';
import {AllProfilesComponent} from './profile/all-profiles/all-profiles.component';
import {SimilarProfilesComponent} from './profile/similar-profiles/similar-profiles.component';
import {AddProfileComponent} from './administration/add-profile/add-profile.component';


const routes: Routes = [
  {
    path: 'one-profile/:id',
    component: OneProfileComponent
  },
  {
    path: 'all-profiles',
    component: AllProfilesComponent
  },
  {
    path: 'recommended/:id',
    component: SimilarProfilesComponent
  },
  {
    path: 'add-profile',
    component: AddProfileComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
  // useHash: true,
  scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
