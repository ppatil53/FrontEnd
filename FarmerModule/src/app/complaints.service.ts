import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaints } from './complaints';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  private baseURL ="http://localhost:8086/complaints/Complaints";
  constructor(private httpClient: HttpClient) { }

  getComplaintList(): Observable<Complaints[]>{
    return this.httpClient.get<Complaints[]>(`${this.baseURL}`);
  }
  addComplaint(complaint: Complaints):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,complaint);
  }

  getComplaintById(id: number): Observable<Complaints>{
    return this.httpClient.get<Complaints>(`${this.baseURL}/${id}`);

  }

  updateComplaint(id: number, complaint: Complaints):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, complaint);
  }

  deleteComplaint(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
