import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSpreadComponent } from './region-spread.component';

describe('RegionSpreadComponent', () => {
  let component: RegionSpreadComponent;
  let fixture: ComponentFixture<RegionSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionSpreadComponent);
    component = fixture.componentInstance;
    component.regionSpread  = { piltoverzaun: 2, noxus: 3 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
