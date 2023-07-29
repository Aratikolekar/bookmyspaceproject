import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ActivePackagesComponent } from './pages/active-packages/active-packages.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BookRoomComponent } from './pages/book-room/book-room.component';
import { CanCreateRoomsComponent } from './pages/can-create-rooms/can-create-rooms.component';
import { CanCreateUsersComponent } from './pages/can-create-users/can-create-users.component';
import { ClientAdminLayoutComponent } from './pages/client-admin-layout/client-admin-layout.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';
import { ClientUserLayoutComponent } from './pages/client-user-layout/client-user-layout.component';
import { ClientUserComponent } from './pages/client-user/client-user.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { CreatePackagesComponent } from './pages/create-packages/create-packages.component';
import { CreateUserForClientComponent } from './pages/create-user-for-client/create-user-for-client.component';
import { LoginComponent } from './pages/login/login.component';
import { SuperAdminLayoutComponent } from './pages/super-admin-layout/super-admin-layout.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AssignPackageComponent } from './pages/assign-package/assign-package.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: SuperAdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'create-packages', component: CreatePackagesComponent },
      { path: 'create-user-for-client', component: CreateUserForClientComponent,},
      { path: 'create-client', component: CreateClientComponent },
      { path: 'active-packages', component: ActivePackagesComponent },
      { path: 'assign-packages', component: AssignPackageComponent },

    ],
  },
  {
    path: '',
    component: ClientUserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'user-dashboard', component: UserDashboardComponent },
      { path: 'book-room', component: BookRoomComponent },
    ],
  },

  {
    path: '',
    component: ClientAdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'client-dashboard', component: ClientDashboardComponent },
      { path: 'can-create-rooms', component: CanCreateRoomsComponent },
      { path: 'create-user', component: CreateUserForClientComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
