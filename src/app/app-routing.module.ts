import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { AuthGuard } from './auth.guard';

  const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'category/:category', component: HomeComponent }, // Dynamic route
{ path: 'info', component: InfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
