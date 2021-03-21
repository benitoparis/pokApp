import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryMainComponent } from './features/directory-main/directory-main.component';

const routes: Routes = [
  { 
    path: '',
    //pathMatch: 'full',
    component: DirectoryMainComponent,
  },
  { path: 'setting' , 
    loadChildren: () => import('./features/modules/settings/settings.module').then(m => m.SettingsModule)
  },
  { path: '**', component: DirectoryMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
