import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarService } from './sidebar.service';
import { NewhireComponent } from './newhire/newhire.component';







const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'newhire', component: NewhireComponent}
 
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    NewhireComponent
 
  
  ],
  imports: [
  
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
