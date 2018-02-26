import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhireComponent } from './newhire.component';

describe('NewhireComponent', () => {
  let component: NewhireComponent;
  let fixture: ComponentFixture<NewhireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
