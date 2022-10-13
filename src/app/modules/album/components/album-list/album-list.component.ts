import { Component, Input } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {
  @Input() public albums: Album[];

  constructor() { }
}
