import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComplaintsComponent } from './add-complaints/add-complaints.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { UpdateComplaintComponent } from './update-complaint/update-complaint.component';

const routes: Routes = [
  {path: 'complaints', component: ComplaintListComponent},
  {path: 'add-complaints', component: AddComplaintsComponent},
  {path: '',redirectTo: 'complaints', pathMatch:'full'},
  {path:'update-complaint/:id', component:UpdateComplaintComponent},
  {path: 'complaint-details/:id', component:ComplaintDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
