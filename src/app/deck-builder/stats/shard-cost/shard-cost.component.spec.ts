import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardCostComponent } from './shard-cost.component';

describe('ShardCostComponent', () => {
  let component: ShardCostComponent;
  let fixture: ComponentFixture<ShardCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShardCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShardCostComponent);
    component = fixture.componentInstance;
    component.cost = 24200;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
