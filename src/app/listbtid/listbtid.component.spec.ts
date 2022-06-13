import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbtidComponent } from './listbtid.component';

describe('ListbtidComponent', () => {
  let component: ListbtidComponent;
  let fixture: ComponentFixture<ListbtidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbtidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbtidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
