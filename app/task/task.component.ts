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

  tabs = [
    {name:"Color"},
    {name:"Hue"},
    {name:"Gel"},
  ];

  buttonsArray = [
    {label: "L002", color: "#ff4972", name:"Gel Name", row:"0", columns:"0"},
    {label: "L035", color: "#ff9c58", name:"Gel Name", row:"0", columns:"1"},
    {label: "L003", color: "#ffc86a", name:"Gel Name", row:"1", columns:"0"},
    {label: "L058", color: "#d932ff", name:"Gel Name", row:"1", columns:"1"},
    {label: "L004", color: "#ff9a0d", name:"Gel Name", row:"2", columns:"0"},
    {label: "L027", color: "#ff0000", name:"Gel Name", row:"2", columns:"1"},
  ];

  fan = [
    {name:"Off"},
    {name:"Auto"},
    {name:"Full"},
  ];

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
