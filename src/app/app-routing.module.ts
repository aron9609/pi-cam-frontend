import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceCreatorFormComponent} from "./pages/device-creator-form/device-creator-form.component";

const routes: Routes = [
  {path: '', component: DeviceCreatorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
