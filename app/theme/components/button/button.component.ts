import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { GestureEventData } from 'tns-core-modules/ui/gestures';
import * as platformModule from "tns-core-modules/platform";

@Component({
    moduleId: module.id,
    selector: 'ts-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    btnHeight;
    btnwidth;

    @Input() labelNumber;
    @Input() color;
    @Input() name;
    @Input() col = 0;
    @Input() row = 0;
    @Output() tap = new EventEmitter<GestureEventData>();
    
    constructor() { }

    ngOnInit() {
        let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
        let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
        this.btnHeight = deviceHeight * 0.12;
        this.btnwidth = deviceWidth * 0.35;
    }

    emitOutput(e: GestureEventData) {
        this.tap.emit(e);
    }
}
