import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionOverviewComponent } from './description-overview.component';

describe('DescriptionOverviewComponent', () => {
  let component: DescriptionOverviewComponent;
  let fixture: ComponentFixture<DescriptionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
