import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { finalize, Observable, switchMap, tap } from 'rxjs';
import { Photo } from 'src/app/modules/photo/models/photo';
import { PhotoService } from 'src/app/modules/photo/services/photo.service';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss']
})
export class AlbumDetailPageComponent implements OnInit {

  public album$: Observable<Album>;
  public albumPhotos$: Observable<Photo[]>;

  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private photoService: PhotoService
    ) { }

  public ngOnInit(): void {
    this.album$ = this.route.paramMap.pipe(
      tap(() => this.loading = true),
      switchMap((params: ParamMap) => this.albumService.getAlbum(+params.get('id'))),
      finalize(() => this.loading = false)
    );

    this.albumPhotos$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.photoService.getAlbumPhotos(+params.get('id')))
    );
  }

}
