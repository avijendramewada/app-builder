import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './home/home.component';
import  { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent} from './contact/contact.component';
import { ServiceComponent} from './service/service.component';
import {TeamComponent } from './team/team.component';
import {ProjectComponent} from './project/project.component';
import {BlogComponent} from './blog/blog.component';
import {SinglepageComponent} from './singlepage/singlepage.component'
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ContactComponent},
  {path:'service', component:ServiceComponent},
  {path: 'team', component:TeamComponent},
  {path: 'project',component:ProjectComponent},
  {path: 'blog',component:BlogComponent},
  {path: 'singlepage',component:SinglepageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
