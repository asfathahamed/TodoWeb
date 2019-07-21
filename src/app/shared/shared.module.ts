import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    imports: [
        MatListModule,
        MatIconModule
    ],
    exports: [
        MatListModule,
        MatIconModule
    ]
})
export class SharedModule { }