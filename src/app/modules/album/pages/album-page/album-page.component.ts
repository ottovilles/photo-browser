import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatorEvent } from 'src/app/modules/photo/models/paginator-event';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {
  public albums$: Observable<Album[]>;
  public totalCount$: Observable<number>;
  public rows: number;

  constructor(private albumService: AlbumService) { }

  public ngOnInit(): void {
    this.rows = this.albumService.rowSize;
    this.totalCount$ = this.albumService.totalAlbumCount$;
    this.getAlbums(1);
  }

  public paginate(event: PaginatorEvent): void {
    const page = event.page + 1;
    this.getAlbums(page);
  }

  private getAlbums(page: number): void {
    this.albums$ = this.albumService.getAlbums(page);
  }

}
