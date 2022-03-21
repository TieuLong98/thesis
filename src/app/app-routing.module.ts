import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnauthorizeComponent } from "./unauthorize/unauthorize.component";

import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";
import { RoomComponent } from "./room/room.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { DevicesComponent } from "./devices/devices.component";
import { SettingComponent } from "./setting/setting.component";

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: LayoutComponent },
  {path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'rooms', component: RoomComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'devices', component: DevicesComponent },
      { path: 'setting', component: SettingComponent },
    ],
  },
//   {
//     path: "users",
//     component: UsersComponent,
//     children: [{ path: ":id/:name", component: UserComponent }],
//   },

  // This path should be the last in the appRoutes (** catch everything, the path does not include in the routes will be redirect in to this page )
  //   { path: "not-found", component: PageNotFoundComponent },
  {
    path: "not-found",
    component: UnauthorizeComponent,
    data: { message: "Unauthorize Access - Error!" },
  },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
