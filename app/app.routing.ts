import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { TaskComponent } from "~/task/task.component";

const routes: Routes = [
    { path: "", redirectTo: "/task", pathMatch: "full" },
    { path: "task", component: TaskComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }