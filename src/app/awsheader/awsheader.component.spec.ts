import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsheaderComponent } from './awsheader.component';

describe('AwsheaderComponent', () => {
  let component: AwsheaderComponent;
  let fixture: ComponentFixture<AwsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
