import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorEvent } from '../../models/paginator-event';
import { Photo } from '../../models/photo';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent implements OnInit {
  public photos$: Observable<Photo[]>;
  public totalCount$: Observable<number>;
  public rows: number;

  constructor(private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.rows = this.photoService.rowSize;
    this.totalCount$ = this.photoService.totalPhotoCount$;
    this.getPhotos(1);
  }

  public paginate(event: PaginatorEvent): void {
    const page = event.page + 1;
    this.getPhotos(page);
  }

  private getPhotos(page: number): void {
    this.photos$ = this.photoService.getPhotos(page);
  }
}
