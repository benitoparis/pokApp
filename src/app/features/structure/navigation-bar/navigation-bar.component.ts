import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  totalFavouritePokemon = 0;
  favoriteColorTheme = 'dark';

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.setExistingSettings();
    this.generalService.getCount().subscribe(item=> {
      this.totalFavouritePokemon = item.number;
    })
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
