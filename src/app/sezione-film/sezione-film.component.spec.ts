import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneFilmComponent } from './sezione-film.component';

describe('SezioneFilmComponent', () => {
  let component: SezioneFilmComponent;
  let fixture: ComponentFixture<SezioneFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SezioneFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
