import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {HttpClientModule} from '@angular/common/http';

import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary,{
      cloud_name: 'deep-dive',
      upload_preset: 'lostpaws'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
