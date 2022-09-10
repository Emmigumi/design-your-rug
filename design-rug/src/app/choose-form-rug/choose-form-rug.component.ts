import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-form-rug',
  templateUrl: './choose-form-rug.component.html',
  styleUrls: ['./choose-form-rug.component.scss']
})
export class ChooseFormRugComponent implements OnInit {
  searchValue: string = '';
  isExpanded: boolean = false;
  email: any;
  description: any;
  constructor() { }

  ngOnInit(): void {
  }

}
