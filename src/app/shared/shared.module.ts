/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "./material.module";
/* our own custom components */

/* our own custom components */

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    FormsModule,

    /* 3rd party components */
    //****************************************************
    MaterialModule
  ],
  declarations: [
    // SomeCustomComponent
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    FormsModule,
    
    /* 3rd party components */
    MaterialModule

    /* our own custom components */
    // SomeCustomComponent
  ]
})
export class SharedModule {
}
