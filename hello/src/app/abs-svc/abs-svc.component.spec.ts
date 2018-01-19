import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsSvcComponent } from './abs-svc.component';

describe('AbsSvcComponent', () => {
  let component: AbsSvcComponent;
  let fixture: ComponentFixture<AbsSvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsSvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
