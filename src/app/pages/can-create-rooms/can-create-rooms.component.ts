import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-can-create-rooms',
  templateUrl: './can-create-rooms.component.html',
  styleUrls: ['./can-create-rooms.component.css'],
})
export class CanCreateRoomsComponent {
  isSidePannelOpen: boolean = false;
  isAPICallInProgress: boolean = false;
  isLoader: boolean = false;
  clientArray: any[] = [];
  roomObj: any = {
    roomId: 0,
    roomName: '',
    roomLocation: '',
    roomSeatingCapacity: 0,
    isRoomActive: false,
    clientId: 0,
    createdDate: new Date(),
    lastUpdatetd: new Date(),
  };
  roomArray: any[] = [];
  constructor(
    private http: HttpClient,
    private toastrSrv: ToastrService,
    private masterServ: MasterService
  ) {
    this.getRoom();
    this.getAllClient();
  }
  openPannel() {
    this.isSidePannelOpen = true;
  }
  closePannel() {
    this.isSidePannelOpen = false;
  }
  getAllClient() {
    this.masterServ.getAllClient().subscribe((res: any) => {
      this.clientArray = res.data;
    });
  }

  onReset() {
    this.roomObj = {
      roomId: 0,
      roomName: '',
      roomLocation: '',
      roomSeatingCapacity: 0,
      isRoomActive: false,
      clientId: 0,
      createdDate: new Date(),
      lastUpdatetd: new Date(),
    };
  }
  getRoom() {
    this.isLoader = true;
    this.masterServ.getRoom().subscribe((res: any) => {
      this.isLoader = false;
      this.roomArray = res.data;
    });
  }
  addRoom() {
    if (this.isAPICallInProgress == false) {
      this.isAPICallInProgress = true;
      this.masterServ.addRoom(this.roomObj).subscribe((res: any) => {
        if (res.result) {
          this.getRoom();
          this.onReset();
          this.toastrSrv.success(res.message);
        }
        this.isAPICallInProgress == false;
        // else {
        // this.toastrSrv.error(res.message);
        // }
      });
    }
  }
  onEdit(id: number) {
    this.masterServ.onEditRoom(id).subscribe((res: any) => {
      this.roomObj = res.data;
      this.isSidePannelOpen = true;
      this.getRoom();
    });
  }
  onUpdate() {
    if (this.isAPICallInProgress == false) {
      this.isAPICallInProgress = true;
      this.masterServ.onUpdateRoom(this.roomObj).subscribe((res: any) => {

        if (res.result) {
          this.getRoom();
          this.toastrSrv.success(res.message);
        }
        this.isAPICallInProgress == false;
        // else {
        // this.toastrSrv.error(res.message);
        // }
      });
    }
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to delete');
    this.masterServ.onDeleteRoom(id).subscribe((res: any) => {
      this.roomObj = res.data;
      if (res.result) {
        this.getRoom();
        this.toastrSrv.success(res.message);
      } else {
        this.toastrSrv.error(res.message);
      }
    });
  }
}
