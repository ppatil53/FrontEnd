import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaints } from '../complaints';
import { ComplaintsService } from '../complaints.service';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  id: number;
  complaint: Complaints

  constructor(private route:ActivatedRoute, private complaintService:ComplaintsService){ }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.complaint=new Complaints();
    this.complaintService.getComplaintById(this.id).subscribe(data =>{
      this.complaint= data;
    })

  }

}
