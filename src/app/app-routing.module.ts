import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './pages/skills/skills.component';
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path:'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
