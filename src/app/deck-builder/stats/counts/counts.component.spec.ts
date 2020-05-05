import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsComponent } from './counts.component';

describe('CountsComponent', () => {
  let component: CountsComponent;
  let fixture: ComponentFixture<CountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsComponent);
    component = fixture.componentInstance;
    component.counts = { champions: 6, followers: 30, spells: 4, all: 40 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
