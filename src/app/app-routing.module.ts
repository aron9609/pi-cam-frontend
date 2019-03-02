import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeviceCreatorFormComponent} from './components/pages/device-creator-form/device-creator-form.component';
import {DeviceFetcherComponent} from './components/pages/device-fetcher/device-fetcher.component';

const routes: Routes = [
  {path: '', redirectTo: 'new-device', pathMatch: 'full'},
  {path: 'new-device', component: DeviceCreatorFormComponent},
  {path: 'devices', component: DeviceFetcherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
