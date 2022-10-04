import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentvisitwelcomerowComponent } from './recentvisitwelcomerow.component';

describe('RecentvisitwelcomerowComponent', () => {
  let component: RecentvisitwelcomerowComponent;
  let fixture: ComponentFixture<RecentvisitwelcomerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentvisitwelcomerowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentvisitwelcomerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
