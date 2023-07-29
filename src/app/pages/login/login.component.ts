import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    UserName: '',
    UserPassword: '',
  };

  isAPICallInProgress :boolean= false
  constructor(private router: Router, private http: HttpClient) {}
  onLogin() {

    if (this.isAPICallInProgress == false) {
      console.log('if ststement executed');
      this.isAPICallInProgress = true;

    this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/login', this.loginObj).subscribe((result: any) => {
        debugger;


        if (result.result) {
          localStorage.setItem('logUserName',JSON.stringify(result.data))
          if (result.data.role == 'Admin') {

            this.router.navigateByUrl('admin-dashboard');
          } else if (result.data.role == 'ClientAdmin') {
            this.router.navigateByUrl('client-dashboard');
          } else if (result.data.role == 'ClientUser') {
            this.router.navigateByUrl('user-dashboard');
          }
         this.isAPICallInProgress == false;
          // else {
          //   alert(result.message);
          // }
        }
      }
     );
    }
  }
}

