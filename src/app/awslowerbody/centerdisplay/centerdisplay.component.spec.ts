import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterdisplayComponent } from './centerdisplay.component';

describe('CenterdisplayComponent', () => {
  let component: CenterdisplayComponent;
  let fixture: ComponentFixture<CenterdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
