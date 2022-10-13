import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { finalize, Observable, switchMap, tap } from 'rxjs';
import { Photo } from '../../models/photo';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-detail-page',
  templateUrl: './photo-detail-page.component.html',
  styleUrls: ['./photo-detail-page.component.scss']
})
export class PhotoDetailPageComponent implements OnInit {
  public photo$: Observable<Photo>;

  public loading = false;
  
  constructor(private route: ActivatedRoute, private photoService: PhotoService) { }

  public ngOnInit(): void {
    this.photo$ = this.route.paramMap.pipe(
      tap(() => this.loading = true),
      switchMap((params: ParamMap) => this.photoService.getPhoto(+params.get('id'))),
      finalize(() => this.loading = false)
    );
  }
}
