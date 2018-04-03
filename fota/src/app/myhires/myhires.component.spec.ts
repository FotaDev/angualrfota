import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhiresComponent } from './myhires.component';

describe('MyhiresComponent', () => {
  let component: MyhiresComponent;
  let fixture: ComponentFixture<MyhiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
