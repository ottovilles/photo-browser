import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiService {

  private readonly baseURL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  public getAlbums(page: number, rows: number): Observable<HttpResponse<Album[]>> {
    return this.http.get<Album[]>(`${this.baseURL}?_page=${page}&_limit=${rows}`, { observe: 'response'});
  }

  public getAlbum(id: number): Observable<HttpResponse<Album>> {
    return this.http.get<Album>(`${this.baseURL}/${id}`, {observe: 'response'})
  }
}
