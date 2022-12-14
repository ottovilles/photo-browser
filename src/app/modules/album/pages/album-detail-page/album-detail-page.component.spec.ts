import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailPageComponent } from './album-detail-page.component';

describe('AlbumDetailPageComponent', () => {
  let component: AlbumDetailPageComponent;
  let fixture: ComponentFixture<AlbumDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
