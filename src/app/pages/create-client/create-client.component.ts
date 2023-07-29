import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent {
  isSidePannelOpen: boolean = true;
  isAPICallInProgress: boolean = false;
  clientArray: any[] = [];
  clientObj: any = {
    clientId: 0,
    clientName: '',
    companyName: '',
    address: '',
    city: '',
    pinCode: '',
    state: '',
    employeeStrength: 0,
    gstNo: '',
    contactNo: '',
  };
isLoader:boolean=false;
  constructor(private masterServ: MasterService, private http: HttpClient) {
    this.getAllClient();
  }
  openPannel() {
    this.isSidePannelOpen = true;
  }
  closePannel() {
    this.isSidePannelOpen = false;
  }
  getAllClient() {
    this.isLoader=true;
    this.masterServ.getAllClient().subscribe((res: any) => {
      this.isLoader=false
      this.clientArray = res.data;
    });
  }

  addClient() {
    console.log('add package');
    if (this.isAPICallInProgress == false) {
      console.log('if ststement executed');
      this.isAPICallInProgress = true;
    this.masterServ.addClient(this.clientObj).subscribe((res: any) => {
      // this.clientObj=res.data;
      if (res.result) {
        this.getAllClient();
        this.onReset();
        this.isSidePannelOpen = false;

        alert(res.message);
      }
      this.isAPICallInProgress == false
      // else {
      //   alert(res.message);
      // }
    });
  }
  }
  onEdit(id: number) {
    this.masterServ.onEdit(id).subscribe((res: any) => {
      this.clientObj = res.data;
      this.isSidePannelOpen = true;
    });
  }
  onDelete(id: number) {
    this.masterServ.onDelete(id).subscribe((res: any) => {
      if (res.result) {
        this.getAllClient();
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
  onUpdate() {
    console.log('add package');
    if (this.isAPICallInProgress == false) {
      console.log('if ststement executed');
      this.isAPICallInProgress = true;

    this.masterServ.onUpdate(this.clientObj).subscribe((res: any) => {
      if (res.result) {
        this.getAllClient();
        this.onReset();
        this.isSidePannelOpen = false;
        this.isSidePannelOpen = false;
        alert(res.message);
        this.isSidePannelOpen = false;

      }
      this.isAPICallInProgress == false
      // else {
      //   alert(res.message);
      // }

    });
  }
  }
  onReset() {
    this.clientObj = {
      clientId: 0,
      clientName: '',
      companyName: '',
      address: '',
      city: '',
      pinCode: '',
      state: '',
      employeeStrength: 0,
      gstNo: '',
      contactNo: '',
    };
  }
}
