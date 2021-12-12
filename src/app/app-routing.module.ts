import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
