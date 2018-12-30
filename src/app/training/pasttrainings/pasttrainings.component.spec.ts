import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasttrainingsComponent } from './pasttrainings.component';

describe('PasttrainingsComponent', () => {
  let component: PasttrainingsComponent;
  let fixture: ComponentFixture<PasttrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasttrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasttrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
