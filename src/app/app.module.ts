import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CreatePackagesComponent } from './pages/create-packages/create-packages.component';
import { CreateUserForClientComponent } from './pages/create-user-for-client/create-user-for-client.component';
import { ActivePackagesComponent } from './pages/active-packages/active-packages.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { SuperAdminLayoutComponent } from './pages/super-admin-layout/super-admin-layout.component';
import { ClientUserComponent } from './pages/client-user/client-user.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { ClientAdminComponent } from './pages/client-admin/client-admin.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { CanCreateRoomsComponent } from './pages/can-create-rooms/can-create-rooms.component';
import { CanCreateUsersComponent } from './pages/can-create-users/can-create-users.component';
import { ClientUserLayoutComponent } from './pages/client-user-layout/client-user-layout.component';
import { ClientAdminLayoutComponent } from './pages/client-admin-layout/client-admin-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { AssignPackageComponent } from './pages/assign-package/assign-package.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    CreatePackagesComponent,
    CreateUserForClientComponent,
    ActivePackagesComponent,
    CreateClientComponent,
    SuperAdminLayoutComponent,
    ClientUserComponent,
    UserDashboardComponent,
    BookRoomComponent,
    ClientAdminComponent,
    ClientDashboardComponent,
    CanCreateRoomsComponent,
    CanCreateUsersComponent,
    ClientUserLayoutComponent,
    ClientAdminLayoutComponent,
    AssignPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
