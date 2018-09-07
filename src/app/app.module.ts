import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DownloadZipFormComponent } from './download-zip-form/download-zip-form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '**', component: DownloadZipFormComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    DownloadZipFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
