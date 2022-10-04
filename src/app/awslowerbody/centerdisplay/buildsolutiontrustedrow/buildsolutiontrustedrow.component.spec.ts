import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsolutiontrustedrowComponent } from './buildsolutiontrustedrow.component';

describe('BuildsolutiontrustedrowComponent', () => {
  let component: BuildsolutiontrustedrowComponent;
  let fixture: ComponentFixture<BuildsolutiontrustedrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildsolutiontrustedrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildsolutiontrustedrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
