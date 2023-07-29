import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-user-layout',
  templateUrl: './client-user-layout.component.html',
  styleUrls: ['./client-user-layout.component.css']
})
export class ClientUserLayoutComponent {
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
