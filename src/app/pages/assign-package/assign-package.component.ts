import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-assign-package',
  templateUrl: './assign-package.component.html',
  styleUrls: ['./assign-package.component.css'],
})
export class AssignPackageComponent {
  isSidePannelOpen: boolean = false;
  isAPICallInProgress: boolean = false;
  isLoader: boolean = false;
  packageArray: any[] = [];
  pkgArray2: any[] = [];
  clientArray: any[] = [];
  packageObj: any = {
    clientPackageId: 0,
    clientId: 0,
    packageId: 0,
    createdDate: new Date(),
    lastUpdated: new Date(),
    packageStartDate: new Date(),
    packageEndDate: new Date(),
    isActive: false,
  };

  constructor(private http: HttpClient, private masterServ: MasterService,private toastrSrv:ToastrService,) {
    this.getPackagePkg();
    this.getAllClient();
    this.getPackage();
  }

  openModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  getAllClient() {
    this.masterServ.getAllClient().subscribe((res: any) => {
      this.clientArray = res.data;
    });
  }
  getPackage() {
    this.isLoader=true;
    this.masterServ.getPackage().subscribe((res: any) => {
      this.isLoader=false
      this.pkgArray2 = res.data;
    });
  }

  OpenPannel() {
    this.isSidePannelOpen = true;
  }
  closePannel() {
    this.isSidePannelOpen = false;
  }
  onReset() {
    this.packageObj = {
      clientPackageId: 0,
      clientId: 0,
      packageId: 0,
      createdDate: new Date(),
      lastUpdated: new Date(),
      packageStartDate: new Date(),
      packageEndDate: new Date(),
      isActive: false,
    };
  }
  getPackagePkg() {
    this.http
      .get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllClientPackags')
      .subscribe((res: any) => {
        this.packageArray = res.data;
      });
  }
  addPackage() {
    if (this.isAPICallInProgress == false) {

      this.isAPICallInProgress = true;
      this.masterServ.addNewPackage(this.packageObj).subscribe((res: any) => {

        if (res.result) {
          this.getPackagePkg();
          this.onReset();
          this.isSidePannelOpen = false;
          this.toastrSrv.success(res.message);

        }
        this.isAPICallInProgress == false;
        // else{
      //this.toastrSrv.error(res.message);
        // }
      });
    }
  }

  onEdit(id: number) {
    this.masterServ.onEditPackage(id).subscribe((res: any) => {
      this.packageObj = res.data;
      this.isSidePannelOpen = false;
      this.openModel();
    });
  }
  onUpdate() {
    if (this.isAPICallInProgress == false) {

      this.isAPICallInProgress = true;
      this.masterServ.onUpdatePackage(this.packageObj).subscribe((res: any) => {
        if (res.result) {
          this.getPackagePkg();
          this.onReset();
          this.closeModel();
          this.isSidePannelOpen = false;
          this.toastrSrv.success(res.message);
        }
        this.isAPICallInProgress = false;

        // else{
       //this.toastrSrv.error(res.message);
        // }
      });
    }
  }

  onDelete(id: number) {
    this.masterServ.onDeletePackage(id).subscribe((res: any) => {
      if (res.result) {
        this.getPackagePkg();
        this.onReset();
        this.toastrSrv.success(res.message);
      } else {
      this.toastrSrv.error(res.message);
      }
    });
  }
}
