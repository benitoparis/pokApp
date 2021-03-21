import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory-details',
  templateUrl: './directory-details.component.html',
  styleUrls: ['./directory-details.component.scss']
})
export class DirectoryDetailsComponent implements OnInit {

  @Input() currentPokemon: any;

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
