import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-admin-layout',
  templateUrl: './client-admin-layout.component.html',
  styleUrls: ['./client-admin-layout.component.css']
})
export class ClientAdminLayoutComponent {

    localData:any;
    userName: string = '';
  constructor(private router:Router){
   debugger;
   const local = localStorage.getItem('logUserName');
     if (local != null) {
       this.localData = JSON.parse(local);
       this.userName = this.localData.userName;

     }

  }

  onLogout(){
    localStorage.removeItem('logUserName');
    this.router.navigateByUrl('login')
  }
}
