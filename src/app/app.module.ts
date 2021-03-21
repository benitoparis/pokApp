import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './features/structure/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './features/layout/layout.component';
import { DirectoryMainComponent } from './features/directory-main/directory-main.component';
import { DirectoryDetailsComponent } from './features/directory-details/directory-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LayoutComponent,
    DirectoryMainComponent,
    DirectoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [NavigationBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
