import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchComponent } from './card-search.component';
import { DataDragonService } from '@core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardSearchComponent', () => {
  let component: CardSearchComponent;
  let fixture: ComponentFixture<CardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSearchComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ DataDragonService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
