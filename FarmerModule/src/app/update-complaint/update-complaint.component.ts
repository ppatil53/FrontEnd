import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaints } from '../complaints';
import { ComplaintsService } from '../complaints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-complaint',
  templateUrl: './update-complaint.component.html',
  styleUrls: ['./update-complaint.component.css']
})
export class UpdateComplaintComponent implements OnInit {

  id:number;
  complaint: Complaints=new Complaints();
  constructor(private complaintService: ComplaintsService,
    private router: Router,
    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];

    this.complaintService.getComplaintById(this.id).subscribe(data =>{
      this.complaint=data;
    },error => console.log(error));
  }

  onSubmit(){
    this.complaintService.updateComplaint(this.id,this.complaint).subscribe(data =>{
      this.goToComplaintlist();
    },
    error => console.log(error));
  }
  goToComplaintlist(){
    this.router.navigate(['/complaints']);
  }

}
