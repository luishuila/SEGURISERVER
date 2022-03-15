import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformuComponent } from './listformu.component';

describe('ListformuComponent', () => {
  let component: ListformuComponent;
  let fixture: ComponentFixture<ListformuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListformuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
