import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, BehaviorSubject } from 'rxjs';
import { Album } from '../models/album';
import { AlbumApiService } from './album-api.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public readonly rowSize = 20;
  private albumCount = new BehaviorSubject<number>(0);

  constructor(private api: AlbumApiService) { }

  public get totalAlbumCount$(): Observable<number> {
    return this.albumCount.asObservable();
  }

  public getAlbums(page: number): Observable<Album[]> {
    return this.api.getAlbums(page, this.rowSize).pipe(
      tap((response: HttpResponse<Album[]>) => this.albumCount.next(+response.headers.get('X-Total-Count'))),
      map(response => response.body)
    );
  }

  public getAlbum(id: number): Observable<Album> {
    return this.api.getAlbum(id).pipe(
      map(response => response.body)
    );
  }}
