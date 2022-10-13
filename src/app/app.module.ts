import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumModule } from './modules/album/album.module';
import { PhotoModule } from './modules/photo/photo.module';
import { RoutesModule } from './modules/routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotoModule,
    AlbumModule,
    BrowserAnimationsModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
