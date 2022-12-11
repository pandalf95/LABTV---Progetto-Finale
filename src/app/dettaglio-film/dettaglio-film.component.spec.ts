import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioFilmComponent } from './dettaglio-film.component';

describe('DettaglioFilmComponent', () => {
  let component: DettaglioFilmComponent;
  let fixture: ComponentFixture<DettaglioFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
