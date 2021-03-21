import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Input() totalFavouritePokemon = 0;
  favoriteColorTheme = 'dark';

  constructor() { }

  ngOnInit(): void {
    this.setExistingSettings();
  }

  setExistingSettings(): void {

    if (localStorage.getItem('userFavourite')) {
      const existingUserPref = localStorage.getItem('userFavourite');
      if (existingUserPref) {
        this.favoriteColorTheme = JSON.parse(existingUserPref).favouriteTheme;
      }
    } else {
      this.favoriteColorTheme = 'dark';
    }
  }

  

}
