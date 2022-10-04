import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcostusagerowComponent } from './healthcostusagerow.component';

describe('HealthcostusagerowComponent', () => {
  let component: HealthcostusagerowComponent;
  let fixture: ComponentFixture<HealthcostusagerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcostusagerowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcostusagerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
