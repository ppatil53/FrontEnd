// import { Component } from '@angular/core';
import { Complaints } from '../complaints';
import { ComplaintsService } from '../complaints.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {
  complaints: Complaints[];
  constructor(private complaintService: ComplaintsService,
    private route: Router){}
  
ngOnInit(): void{
  this.getComlaints();
}
  private getComlaints(){
    this.complaintService.getComplaintList().subscribe(data => {
      this.complaints=data;
    });
  }

  complaintDetails(id: number){

    this.route.navigate(['complaint-details',id]);
  }

  updateComplaint(id: number){
    this.route.navigate(['update-complaint',id]);
  }

  deleteComplaint(id: number){ 
    this.complaintService.deleteComplaint(id).subscribe(data =>{
      console.log(data);
      this.getComlaints();
    })
  }

}
