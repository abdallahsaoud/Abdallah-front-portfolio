import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionElementComponent } from './dynamic-section-element.component';

describe('DynamicSectionElementComponent', () => {
  let component: DynamicSectionElementComponent;
  let fixture: ComponentFixture<DynamicSectionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSectionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSectionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
