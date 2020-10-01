import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggle: boolean = true;
  @Output('toogleEmit') toggleEmit: EventEmitter<boolean>;
  constructor() {
    this.toggleEmit = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  sendToggle() {
    if (this.toggle === undefined) {
      this.toggle = true;
    }
    this.toggle = !this.toggle;
    this.toggleEmit.emit(this.toggle);
  }

}
