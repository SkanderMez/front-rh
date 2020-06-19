import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { OneProfileComponent } from './profile/one-profile/one-profile.component';
import { AllProfilesComponent } from './profile/all-profiles/all-profiles.component';
import { SimilarProfilesComponent } from './profile/similar-profiles/similar-profiles.component';
import { AddProfileComponent } from './administration/profile/add-profile/add-profile.component';
import { ListProfilesComponent } from './administration/profile/list-profiles/list-profiles.component';
import { UpdateProfilesComponent } from './administration/profile/update-profiles/update-profiles.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderInterceptor} from './_interceptors/loader.interceptor';
import { AddSchoolComponent } from './administration/school/add-school/add-school.component';
import { ListSchoolsComponent } from './administration/school/list-schools/list-schools.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    OneProfileComponent,
    AllProfilesComponent,
    SimilarProfilesComponent,
    AddProfileComponent,
    ListProfilesComponent,
    UpdateProfilesComponent,
    AddSchoolComponent,
    ListSchoolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
