import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommontComponent } from './commont.component';

describe('CommontComponent', () => {
  let component: CommontComponent;
  let fixture: ComponentFixture<CommontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
