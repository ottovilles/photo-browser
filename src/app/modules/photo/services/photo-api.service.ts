import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {

  private readonly baseURL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  public getPhotos(page: number, rows: number): Observable<HttpResponse<Photo[]>> {
    return this.http.get<Photo[]>(`${this.baseURL}?_page=${page}&_limit=${rows}`, { observe: 'response'});
  }

  public getAlbumPhotos(albumId: number): Observable<HttpResponse<Photo[]>> {
    return this.http.get<Photo[]>(`${this.baseURL}?albumId=${albumId}`, { observe: 'response'});
  }

  public getPhoto(id: number): Observable<HttpResponse<Photo>> {
    return this.http.get<Photo>(`${this.baseURL}/${id}`, {observe: 'response'})
  }
}
