import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-create-packages',
  templateUrl: './create-packages.component.html',
  styleUrls: ['./create-packages.component.css'],
})
export class CreatePackagesComponent {
  isSidePannelOpen: boolean = false;
  isAPICallInProgress: boolean = false;

  isLoader:boolean=false
  list: boolean = false;
  grid: boolean = true;
  packageArray: any[] = [];
  packageObj: any = {
    packageId: 0,
    packageName: '',
    packageCost: 0,
    packageDescription: '',
    isPackageActive: false,
  };
  constructor(private http: HttpClient, private pkgServ: MasterService) {
    this.getPackage();
  }
  onReset() {
    this.packageObj = {
      packageId: 0,
      packageName: '',
      packageCost: 0,
      packageDescription: '',
      isPackageActive: false,
    };
  }
  getPackage() {

    this. isLoader=true
    this.pkgServ.getPackage().subscribe((res: any) => {
      this. isLoader=false
      this.packageArray = res.data;
    });
  }
  addPackage() {
    console.log('add package');
    if (this.isAPICallInProgress == false) {
      console.log('if ststement executed');
      this.isAPICallInProgress = true;

    this.pkgServ.addPackage(this.packageObj).subscribe((res: any) => {
      this.packageObj = res.data;
      if (res.result) {
        this.getPackage();
        this.onReset();
        this.isSidePannelOpen = false;

        alert(res.message);
      }
        this.isAPICallInProgress = false;

    });
  }
  }
  onEdit(id: number) {
    this.pkgServ.onEditPkg(id).subscribe((res: any) => {
      this.packageObj = res.data;
      this.isSidePannelOpen = true;
      this.getPackage();
    });
  }
  onUpdate() {
    console.log('add package');
    if (this.isAPICallInProgress == false) {
      console.log('if ststement executed');
      this.isAPICallInProgress = true;
    }
    this.pkgServ.onUpdatePkg(this.packageObj).subscribe((res: any) => {
      if (res.result) {
        this.getPackage();
        this.onReset();
        this.isSidePannelOpen = false;

        alert(res.message);
        this.isAPICallInProgress = true;
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id: number) {
    this.pkgServ.onDeletePkg(id).subscribe((res: any) => {
      if (res.result) {
        this.getPackage();
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  OpenPannel() {
    this.isSidePannelOpen = true;
  }
  closePannel() {
    this.isSidePannelOpen = false;
  }

  listView() {
    this.list = true;
    this.grid = false;
  }
  gridView() {
    this.list = false;
    this.grid = true;
  }
}
