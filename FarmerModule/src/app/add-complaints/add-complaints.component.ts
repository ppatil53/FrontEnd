// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Complaints } from '../complaints';
import { ComplaintsService } from '../complaints.service';
//  import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-complaints',
  templateUrl: './add-complaints.component.html',
  styleUrls: ['./add-complaints.component.css']
})
export class AddComplaintsComponent implements OnInit  {
  form!: FormGroup

complaint: Complaints=new Complaints();
constructor(private complaintService: ComplaintsService,
  private fb: FormBuilder,
  private router: Router){}
ngOnInit(): void {
  this.form=this.fb.group({
    productid: this.fb.control('',Validators.required),
    productname: this.fb.control('',Validators.required),
    points: this.fb.control('',Validators.required),
    complaints: this.fb.control('',Validators.required),
  },{updateOn:'submit'})
  
}
saveComplaint(){
  this.complaintService.addComplaint(this.complaint).subscribe( data =>{
    console.log(data);
    this.goToComplaintlist();
  },
  error => console.log(error));
}
goToComplaintlist(){
  this.router.navigate(['/complaints']);
}
// get productId(): FormControl{
//   return this.addForm.get("productid");
// }
onSubmit(){
  console.log(this.complaint);
  this.saveComplaint();
}
}
