import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import {
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
    imports: [
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule
    ],
    exports: [
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule
    ]
})
export class SharedModule { }