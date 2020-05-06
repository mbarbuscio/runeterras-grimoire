import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFilterComponent } from './region-filter.component';
import { DataDragonService } from '@core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegionFilterComponent', () => {
  let component: RegionFilterComponent;
  let fixture: ComponentFixture<RegionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionFilterComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ DataDragonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
