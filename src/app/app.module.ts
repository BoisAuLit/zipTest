import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadZipFormComponent } from './download-zip-form/download-zip-form.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatSelectModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  {path: 'coupon', component: DownloadZipFormComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    DownloadZipFormComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
