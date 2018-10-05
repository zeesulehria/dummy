import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  moduleId: module.id
})
export class TaskComponent implements OnInit {

  constructor(private _page: Page) { }
  isActive  = 1;
  isFanActive  = 0;

  ngOnInit() {
    this._page.actionBarHidden = true;
  }

  selectTab(args) {
    switch (args) {
      case 0: {
         this.isActive = 0;
      }
        break;
      case 1: {
         this.isActive = 1;
      }
        break;
      case 2: {
         this.isActive = 2;
      }
        break;
      default:
        break;
    }
  }

  selectFan(args) {
    switch (args) {
      case 0: {
         this.isFanActive = 0;
      }
        break;
      case 1: {
         this.isFanActive = 1;
      }
        break;
      case 2: {
         this.isFanActive = 2;
      }
        break;
      default:
        break;
    }
  }
}
