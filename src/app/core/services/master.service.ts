import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

//client
  getAllClient(){
   return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllClients');
  }

  addClient(obj:any){
   return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/AddClients',obj);
  }
  onEdit(id:number){
    return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetClientsById?id='+id);
  }

  onDelete(id:number){
    return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/DeleteClients?id='+id,{});
  }
  onUpdate(obj:any){
   return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/UpdateClients',obj);
  }


//create Package
  getPackage() {
   return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages');
  }
  addPackage(obj:any) {
    return this.http.post(' http://onlinetestapi.gerasim.in/api/Meeting/CreatePackage', obj);

  }
  onEditPkg(id:number){
    return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetPackgeById?id='+id)
  }
  onUpdatePkg(obj:any) {
    return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/UpdatePackge', obj);
  }
  onDeletePkg(id:number){
    return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/DeletePackgeById?id='+id,{})
}
//user
getUser(){
  return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllusers');
}

addUser(obj:any){
  return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/AddUsers',obj)
}
onEditUser(id:number){
return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetUsersById?id='+id);
}
onUpdateUser(obj:any){
return  this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/UpdateUser',obj);
}
onDeleteUser(id:number){
  return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/DeleteUsersById?id='+id,{})
}
//create room
getRoom(){
 return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllRooms');

}
addRoom(obj:any){
  return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/CreateRoom',obj)
}
onEditRoom(id:number){
  return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetRoomById?id=' + id,{})
}

onUpdateRoom(obj:any){
  return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/UpdateRoom',obj)

}
onDeleteRoom(id:any){
 return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/DeleteRoomById?id=' + id,{})
}
//room booking
getAllBooking(){
  return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllBookings');
}
bookNewRoom(obj:any){
  return  this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/CreateBooking',obj);
}

updateRoom(obj:any){
  return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/UpdateBooking',obj );
 }
 onEditBookRoom(id:number){
 return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetBookingById?id='+id,{} )
 }

 onDeleteBookRoom(id:number){
return  this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/DeleteBookingById?id=' +id,{})

 }

 //assign package
 getPackagePkg(){
  return this.http.get('http://onlinetestapi.gerasim.in/api/Meeting/GetAllClientPackags')
 }

 addNewPackage(obj:any){
  return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/AddNewClientPackage', obj)
 }

 onEditPackage(id:number){
  return  this.http.get(' http://onlinetestapi.gerasim.in/api/Meeting/GetClientPackageById?id='+id )
 }

 onUpdatePackage(obj:any){
  return this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/UpdateClientPackage',obj )
 }
 onDeletePackage(id:number){
  return  this.http.post('http://onlinetestapi.gerasim.in/api/Meeting/DeleteClientPackageById?id=' +id,{} )
 }

}

