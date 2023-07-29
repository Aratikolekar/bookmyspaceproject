import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {


  adminArray:any[]=[];
 adminObj={
  "totBookings": 3,
  "totClients": 4,
  "totPackages": 1,
  "totRooms": 1,
  "totUsers": 3,
  "totActivePackages": 0,
  "todaysBooking": 0
 }
 constructor(private http:HttpClient){
  this.getClient();
 }

 getClient(){
  this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/getAdminDashboardData").subscribe((res:any)=>{
    this.adminObj=res.data;
  })
 }

}
