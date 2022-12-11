import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioTvComponent } from './dettaglio-tv.component';

describe('DettaglioTvComponent', () => {
  let component: DettaglioTvComponent;
  let fixture: ComponentFixture<DettaglioTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
