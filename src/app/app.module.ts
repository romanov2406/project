import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { PatientsComponent } from './layouts/patients/patients.component';
import { CardComponent } from './components/card/card.component';
import { PaginationPipe } from './shared/pipes/pagination.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './shared/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    PatientListComponent,
    RightSidebarComponent,
    PatientsComponent,
    CardComponent,
    PaginationPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
