import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './pages/skills/skills.component';
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path:'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
