import { Component, Input } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-cover',
  templateUrl: './album-cover.component.html',
  styleUrls: ['./album-cover.component.scss']
})
export class AlbumCoverComponent  {
  @Input() public album: Album;

  constructor() { }

}
