import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-setting-edit',
  templateUrl: './setting-edit.component.html',
  styleUrls: ['./setting-edit.component.scss']
})
export class SettingEditComponent implements OnInit {

  userForm: any;
  existingUserPref: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) { 
    
  }

  ngOnInit(): void {

    this.createSettingForm();

    if (localStorage.hasOwnProperty('userFavourite')) {
      this.setExistingSettings();
    }
  }

  createSettingForm(): void {
    this.userForm = this.formBuilder.group({
      itemsPerPage: ['', Validators.required],
      favouriteTheme: ['', [Validators.required]]
    });
  }

  // getter and setters
  get getItemsPerPage(){
    return this.userForm.get('itemsPerPage');
  }

  get getFavouriteTheme(){
    return this.userForm.get('favouriteTheme');
  }

  set setItemsPerPage(newValue: any){
    this.userForm.get('itemsPerPage').setValue(newValue);
  }

  set setFavouriteTheme(newValue: any){
    this.userForm.get('favouriteTheme').setValue(newValue);
  }

  // Save user pref in localStorage
  saveSettings(event: any): void {

    console.log(event);

    const usePreferenceSettings = {
      itemsPerPage: this.getItemsPerPage.value || null,
      favouriteTheme: this.getFavouriteTheme.value || null
    };

    // save Json in local storage
    localStorage.setItem('userFavourite', JSON.stringify(usePreferenceSettings));
    
    this.toastrService.success('Settings Saved!')
  }

  // Check if settings exist in localstorage
  setExistingSettings(): void {
    this.existingUserPref = localStorage.getItem('userFavourite');

    // Set the values in form
    this.setItemsPerPage = JSON.parse(this.existingUserPref).itemsPerPage;
    this.setFavouriteTheme = JSON.parse(this.existingUserPref).favouriteTheme;

  }

}
