import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Photo } from '../models/photo';
import { PhotoApiService } from './photo-api.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public readonly rowSize = 100;

  private photoCount = new BehaviorSubject<number>(0);

  constructor(private api: PhotoApiService) { }

  public get totalPhotoCount$(): Observable<number> {
    return this.photoCount.asObservable();
  }

  public getPhotos(page: number): Observable<Photo[]> {
    return this.api.getPhotos(page, this.rowSize).pipe(
      tap((response: HttpResponse<Photo[]>) => this.photoCount.next(+response.headers.get('X-Total-Count'))),
      map(response => response.body)
    );
  }

  public getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.api.getAlbumPhotos(albumId).pipe(
      map(response => response.body)
    );
  }

  public getPhoto(id: number): Observable<Photo> {
    return this.api.getPhoto(id).pipe(
      map(response => response.body)
    );
  }
}
