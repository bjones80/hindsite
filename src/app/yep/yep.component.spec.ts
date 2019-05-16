import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YepComponent } from './yep.component';

describe('YepComponent', () => {
  let component: YepComponent;
  let fixture: ComponentFixture<YepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
