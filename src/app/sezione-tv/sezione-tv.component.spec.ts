import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneTvComponent } from './sezione-tv.component';

describe('SezioneTvComponent', () => {
  let component: SezioneTvComponent;
  let fixture: ComponentFixture<SezioneTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SezioneTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
