import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NothereComponent } from './nothere.component';

describe('NothereComponent', () => {
  let component: NothereComponent;
  let fixture: ComponentFixture<NothereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NothereComponent]
    });
    fixture = TestBed.createComponent(NothereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
