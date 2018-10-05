import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import {
    ButtonComponent,
} from './components';
const Common_Modules = [
    NativeScriptCommonModule,
];

const NGA_COMPONENTS = [
    ButtonComponent,
];

@NgModule({
    imports: [
        ...Common_Modules
    ],
    declarations: [
        ...NGA_COMPONENTS
    ],
    exports: [
        ...NGA_COMPONENTS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModule,
            providers: [
            ],
        };
    }
}
