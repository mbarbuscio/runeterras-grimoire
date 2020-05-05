import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RarityCountsComponent } from './rarity-counts.component';

describe('RarityCountsComponent', () => {
  let component: RarityCountsComponent;
  let fixture: ComponentFixture<RarityCountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RarityCountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RarityCountsComponent);
    component = fixture.componentInstance;
    component.counts = { CHAMPION: 3, EPIC: 4, RARE: 12, COMMON: 21 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
