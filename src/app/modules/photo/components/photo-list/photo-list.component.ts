import { Component, Input} from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {
  @Input() public photos: Photo[];
}
