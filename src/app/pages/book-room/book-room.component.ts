import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MasterService } from 'src/app/core/services/master.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css'],
})
export class BookRoomComponent {
  isSidePannelOpen: boolean = false;
  isAPICallInProgress:boolean=false;
  isLoader:boolean=false;
  roomArray: any[] = [];
  booRoomArray: any[] = [];
  localData: any;
  bookRoomObj: any = {
    bookingId: 0,
    roomId: 0,
    userId: 0,
    bookingDate: new Date(),
    fromTime: new Date(),
    toTime: new Date(),
    createdDate: new Date(),
    lastUpdated: new Date(),
  };
  constructor(private http: HttpClient,private toastrSrv:ToastrService, private masterServ: MasterService) {
    this.getAllBooking();
    this.getRoom();

    const local = localStorage.getItem('logUserName');
    if (local != null) {
      this.localData = JSON.parse(local);
      this.bookRoomObj.userId = this.localData.userId;
    }
  }
  openPannel() {
    this.isSidePannelOpen = true;
  }
  closePannel() {
    this.isSidePannelOpen = false;
  }

  getRoom() {
    this.masterServ.getRoom().subscribe((res: any) => {
      this.roomArray = res.data;
    });
  }
  getAllBooking() {
   this. isLoader=true
    this.masterServ.getAllBooking()
      .subscribe((res: any) => {
        this. isLoader=false
        this.booRoomArray = res.data;
      });
  }
  bookNewRoom() {

    if (this.isAPICallInProgress == false) {

      this.isAPICallInProgress = true;

    this.masterServ.bookNewRoom(this.bookRoomObj )
      .subscribe((res: any) => {
        if (res.result) {
          this.getAllBooking();

          this.isSidePannelOpen = false;

          this.toastrSrv.success(res.message);
        }
        this.isAPICallInProgress = false;

        // else {
      //this.toastrSrv.error(res.message);
        // }
      });
    }
  }
  onUpdate() {
    if (this.isAPICallInProgress == false) {

      this.isAPICallInProgress = true;
    this.masterServ.updateRoom(this.bookRoomObj )
      .subscribe((res: any) => {
        if (res.result) {
          this.getAllBooking();
          this.onReset();
          this.isSidePannelOpen = false;

          this.toastrSrv.success(res.message);
        }
        this.isAPICallInProgress = false;
        // else {
        //this.toastrSrv.error(res.message);
        // }
      });
    }
  }
  onEdit(id: number) {
    this.masterServ.onEditBookRoom( id ) .subscribe((res: any) => {
        this.bookRoomObj = res.data;
         this.isSidePannelOpen = true;


      });
  }
  onDelete(id: number) {
    this.masterServ.onDeleteBookRoom(id)
      .subscribe((res: any) => {
        if (res.result) {
          this.getAllBooking();
          this.toastrSrv.success(res.message);
        } else {
           this.toastrSrv.error(res.message);
        }
      });
  }
  onReset() {
    this.bookRoomObj = {
      bookingId: 0,
      roomId: 0,
      userId: 0,
      bookingDate: new Date(),
      fromTime: new Date(),
      toTime: new Date(),
      createdDate: new Date(),
      lastUpdated: new Date(),
    };
  }
}
