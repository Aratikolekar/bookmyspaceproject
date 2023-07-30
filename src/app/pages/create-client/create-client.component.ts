import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
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
  isLoader: boolean = false;
  constructor(
    private masterServ: MasterService,
    private toastrSrv: ToastrService,
    private http: HttpClient,
    private messgSrv: MessageService
  ) {
    this.getAllClient();
  }
  openPannel() {
    this.isSidePannelOpen = true;
  }
  closePannel() {
    this.isSidePannelOpen = false;
  }
  getAllClient() {
    this.isLoader = true;
    this.masterServ.getAllClient().subscribe((res: any) => {
      this.isLoader = false;
      this.clientArray = res.data;
    });
  }

  addClient() {

    if (this.isAPICallInProgress == false) {

      this.isAPICallInProgress = true;
      this.masterServ.addClient(this.clientObj).subscribe((res: any) => {
        if (res.result) {
          debugger;
          this.getAllClient();
          this.onReset();
          this.isSidePannelOpen = false;

          this.toastrSrv.success(res.message);
        }
        this.isAPICallInProgress == false;
        // else {

        //this.toastrSrv.error(res.message);

        //  }
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

        this.toastrSrv.success(res.message);
      } else {
        this.toastrSrv.error(res.message);
      }
    });
  }
  onUpdate() {
    if (this.isAPICallInProgress == false) {
      this.isAPICallInProgress = true;

      this.masterServ.onUpdate(this.clientObj).subscribe((res: any) => {
        if (res.result) {
          this.getAllClient();
          this.onReset();
          this.isSidePannelOpen = false;
          this.isSidePannelOpen = false;
          this.toastrSrv.success(res.message);
          this.isSidePannelOpen = false;
        }
        this.isAPICallInProgress == false;
        // else {
        //this.toastrSrv.error(res.message);
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
