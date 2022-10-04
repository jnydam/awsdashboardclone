import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResusablecardComponent } from './resusablecard.component';

describe('ResusablecardComponent', () => {
  let component: ResusablecardComponent;
  let fixture: ComponentFixture<ResusablecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResusablecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResusablecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
