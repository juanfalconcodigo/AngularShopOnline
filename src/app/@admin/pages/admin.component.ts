import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  show: boolean = true;
  constructor() { }


  ngOnInit(): void {
  }


  changeValueShow(event: boolean) {
    this.show = event;
    console.log(this.show)
  }

}
