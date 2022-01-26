import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardModule } from './photo-board.module';
import { PhotoBoardComponent } from './photo-board.component';
import { Photo } from './interfaces/photo';
import { SimpleChange, SimpleChanges } from '@angular/core';

function buildPhotosList(): Photo[] {
  const photos: Photo[] = [];
  for (let index = 0; index < 8; index++) {
    photos.push({
      id: index + 1,
      url: '',
      description: '',
    });
  }
  return photos;
}

describe('PhotoBoardComponent', () => {
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let component: PhotoBoardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it('Should diplay rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotosList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true),
    };
    component.ngOnChanges(change);

    expect(component.rows.length).withContext('Number of rows').toBe(2);
    expect(component.rows[0].length)
      .withContext('Number of columns in first row')
      .toBe(4);
    expect(component.rows[1].length)
      .withContext('Number of columns in second row')
      .toBe(4);
  });
});
