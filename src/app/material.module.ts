import { NgModule } from '@angular/core';
import { MatButtonModule,MatIconModule,MatFormField } from '@angular/material';

@NgModule ({
    imports: [MatButtonModule, MatIconModule,MatFormField],
    exports: [MatButtonModule, MatIconModule,MatFormField]
})
export class MaterialModule { }