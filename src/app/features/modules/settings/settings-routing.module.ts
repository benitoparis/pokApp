import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingEditComponent } from './setting-edit/setting-edit.component';


const routes: Routes = [
  { path: '', component: SettingEditComponent } ,
  // { path: 'setting', pathMatch: 'full' , loadChildren: settingsModule },
  // { path: '**', component: 'PageNotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }