import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoPageComponent } from './pages/photo-page/photo-page.component';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PhotoDetailPageComponent } from './pages/photo-detail-page/photo-detail-page.component';
import { RouterModule } from '@angular/router';
import { PhotoRoutingModule } from './photo-routing.module';

@NgModule({
  declarations: [
    PhotoPageComponent,
    PhotoListComponent,
    PhotoDetailPageComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    HttpClientModule,
    VirtualScrollerModule,
    PaginatorModule,
    ProgressSpinnerModule,
    DialogModule,
    ButtonModule,
    RouterModule,
    PhotoRoutingModule
  ],
  exports: [
    PhotoPageComponent,
    PhotoListComponent
  ]
})
export class PhotoModule { }
