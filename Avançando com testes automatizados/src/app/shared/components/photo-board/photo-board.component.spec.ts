import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardModule } from './photo-board.module';
import { PhotoBoardComponent } from './photo-board.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

import { buildPhotosList } from './test/buildPhotoList';

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
