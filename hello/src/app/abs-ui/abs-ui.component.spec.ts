import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsUiComponent } from './abs-ui.component';

describe('AbsUiComponent', () => {
  let component: AbsUiComponent;
  let fixture: ComponentFixture<AbsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
