import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwslowerbodyComponent } from './awslowerbody.component';

describe('AwslowerbodyComponent', () => {
  let component: AwslowerbodyComponent;
  let fixture: ComponentFixture<AwslowerbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwslowerbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwslowerbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
