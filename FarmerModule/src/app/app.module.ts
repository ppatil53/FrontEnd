import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddComplaintsComponent } from './add-complaints/add-complaints.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComplaintComponent } from './update-complaint/update-complaint.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintListComponent,
    AddComplaintsComponent,
    UpdateComplaintComponent,
    ComplaintDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
