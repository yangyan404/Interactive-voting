import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtcleComponent } from './airtcle.component';

describe('AirtcleComponent', () => {
  let component: AirtcleComponent;
  let fixture: ComponentFixture<AirtcleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtcleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
