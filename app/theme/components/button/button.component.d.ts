import { EventEmitter, OnInit } from '@angular/core';
import { GestureEventData } from 'tns-core-modules/ui/gestures';
export declare class ButtonComponent implements OnInit {
    type: string;
    disabled: boolean;
    full: any;
    text: any;
    tap: EventEmitter<GestureEventData>;
    protected isActive: boolean;
    constructor();
    ngOnInit(): void;
    onTap(e: GestureEventData): void;
    toggleActiveStateBriefly(e: GestureEventData): void;
    emitOutput(e: GestureEventData): void;
}
