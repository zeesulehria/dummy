import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ts-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  moduleId: module.id
})
export class TabsComponent implements OnInit {

  @Input() tabs = 0;
  @Input() activeTab = 0;
  @Input() row = 0;
  @Input() colSpan = 0;

  constructor() { }
  ngOnInit() {
  }

  selectTab(args) {
    switch (args) {
      case 0: {
         this.activeTab = 0;
      }
        break;
      case 1: {
         this.activeTab = 1;
      }
        break;
      case 2: {
         this.activeTab = 2;
      }
        break;
      default:
        break;
    }
  }

}
