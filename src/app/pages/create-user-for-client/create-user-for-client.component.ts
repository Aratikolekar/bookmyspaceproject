import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-create-user-for-client',
  templateUrl: './create-user-for-client.component.html',
  styleUrls: ['./create-user-for-client.component.css'],
})
export class CreateUserForClientComponent {
  isSidePannelOpen: boolean = true;
  isLoader:boolean=false;
  isAPICallInProgress : boolean = false;
  userArray: any[] = [];
  clientArray: any[] = [];
  userObj: any = {
    userId: 0,
    clientId: 0,
    userName: '',
    userPassword: '',
    createdDate: new Date(),
    lastUpdated: new Date(),
    isActive: false,
    role: '',
  };
  localData: any;
  constructor(private masterServ: MasterService,private toastrSrv:ToastrService, private http: HttpClient) {
    this.getAllClient();

    const local = localStorage.getItem('logUserName');
    if (local != null) {
      this.localData = JSON.parse(local);

    if (this.localData.role == 'ClientAdmin') {
      this.getAllUserByClientId();
      this.userObj.clientId = this.localData.clientId;
    } else {
      this.getUser();
    }
  }
  }
  onReset() {
    this.userObj = {
      userId: 0,
      clientId: 0,
      userName: '',
      userPassword: '',
      createdDate: '',
      lastUpdated: '',
      isActive: true,
      role: '',
    };
  }
  getAllUserByClientId() {
    this.http
      .get(
        'http://onlinetestapi.gerasim.in/api/Meeting/GetAllUsersByClientId?id=' +
          this.localData.clientId
      )
      .subscribe((res: any) => {
        this.userArray = res.data;
      });
  }

  getAllClient() {
    this.masterServ.getAllClient().subscribe((res: any) => {
      this.clientArray = res.data;
    });
  }
  getUser() {
    this. isLoader=true
    this.masterServ.getUser().subscribe((res: any) => {
      this. isLoader=false;
      this.userArray = res.data;
    });
  }

  addUser() {

    if (this.isAPICallInProgress == false) {

      this.isAPICallInProgress = true;
    this.masterServ.addUser(this.userObj).subscribe((res: any) => {
      this.userObj = res.data;
      if (res.result) {
        this.getUser();
        this.onReset();
        this.isSidePannelOpen = false;

        this.toastrSrv.success(res.message);

      }
      this.isAPICallInProgress == false;
      // else {
            //this.toastrSrv.error(res.message);

      // }
    });
  }
  }
  onEdit(id: number) {
    this.masterServ.onEditUser(id).subscribe((res: any) => {
      this.userObj = res.data;
      this.isSidePannelOpen = true;
      this.getUser();
    });
  }
  onDelete(id: number) {
    this.masterServ.onDeleteUser(id).subscribe((res: any) => {
      if (res.result) {
        this.getUser();
        this.toastrSrv.success(res.message);

      } else {
      this.toastrSrv.error(res.message);

      }
    });
  }

  updateUser() {
    this.masterServ.onUpdateUser(this.userObj).subscribe((res: any) => {
      if (res.result) {
        this.getUser();
        this.onReset();
        this.isSidePannelOpen = false;

        this.toastrSrv.success(res.message);

      } else {
     this.toastrSrv.error(res.message);

      }
    });
  }

  openPannel() {
    this.isSidePannelOpen = true;
  }
  closePannel() {
    this.isSidePannelOpen = false;
  }
}
