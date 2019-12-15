import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveComponent } from './directive/directive.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterUtdComponent } from './register-utd/register-utd.component';
import { RegisterUrfComponent } from './register-urf/register-urf.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  // {
  //   path:'',redirectTo:'data-binding',pathMatch:'full'    // default & redirect routing
  // },
  {
    path:'employee-crud',
    loadChildren: './employee-crud/employee-crud.module#EmployeeCrudModule'
  },
  {
    path:'panch/data-binding',component:SignupComponent
  },
  {
    path:'data-binding',component:HomeComponent
  },
  {
    path:'directives',component:DirectiveComponent
  },
  {
    path:'directives/:item',component:DirectiveComponent  //parameteriz routing
  },
  {
  path:'empDetail',component:EmpDetailComponent
  },
  {
    path:"empList",component:EmpListComponent
  },
  {
    path:'signup',component:SignupComponent,children:[  //chiled Routing
      {
        path:'',redirectTo:'utd',pathMatch:'full'
      },
      {
        path:'utd',component:RegisterUtdComponent
      },
      {
        path:'urf',component:RegisterUrfComponent
      }
    ]
  },
  {
    path:'pipes',component:PipesComponent
  },
  {
    path:'**',component:NotFoundComponent //wild card Routing
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
