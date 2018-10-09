import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import * as platformModule from "tns-core-modules/platform";

@Component({
  selector: 'ns-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  moduleId: module.id
})
export class TaskComponent implements OnInit {

  
  isActive = 1;
  isFanActive = 0;
  btnHeight;
  btnwidth;
  activeTab = 0;
  
  constructor(private _page: Page) { }
  
  ngOnInit() {
    this._page.actionBarHidden = true;
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.btnHeight = deviceHeight * 0.12;
    this.btnwidth = deviceWidth * 0.35;
  }

  tabs = [
    { name: "Color" },
    { name: "Hue" },
    { name: "Gel" },
  ];

  buttonsArray = [
    { label: "L002", color: "#ff4972", name: "Gel Name", row: "0", columns: "0" },
    { label: "L035", color: "#ff9c58", name: "Gel Name", row: "0", columns: "1" },
    { label: "L003", color: "#ffc86a", name: "Gel Name", row: "1", columns: "0" },
    { label: "L058", color: "#d932ff", name: "Gel Name", row: "1", columns: "1" },
    { label: "L004", color: "#ff9a0d", name: "Gel Name", row: "2", columns: "0" },
    { label: "L027", color: "#ff0000", name: "Gel Name", row: "2", columns: "1" },
  ];

  fan = [
    { name: "Off" },
    { name: "Auto" },
    { name: "Full" },
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

  selectTab(args) {
    console.log(args);
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

  get tabActive() {
    return this.activeTab;
  }

  get FanActive() {
    return this.isFanActive;
  }

}
