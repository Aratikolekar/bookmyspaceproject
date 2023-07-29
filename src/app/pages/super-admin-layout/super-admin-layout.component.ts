import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-layout',
  templateUrl: './super-admin-layout.component.html',
  styleUrls: ['./super-admin-layout.component.css']
})
export class SuperAdminLayoutComponent  implements OnInit {


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

  ngOnInit(): void {

  }
  onLogout(){
    localStorage.removeItem('logUserName');
    this.router.navigateByUrl('login')
  }
}
