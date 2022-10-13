import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumCoverComponent } from './components/album-cover/album-cover.component';
import { PaginatorModule } from 'primeng/paginator';
import { AlbumDetailPageComponent } from './pages/album-detail-page/album-detail-page.component';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  declarations: [
    AlbumPageComponent,
    AlbumListComponent,
    AlbumCoverComponent,
    AlbumDetailPageComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    RouterModule,
    PhotoModule,
    ProgressSpinnerModule,
    AlbumRoutingModule
  ],
  exports: [
    AlbumPageComponent
  ]
})
export class AlbumModule { }
