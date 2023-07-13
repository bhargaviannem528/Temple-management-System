import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncometypeComponent } from './incometype.component';

describe('IncometypeComponent', () => {
  let component: IncometypeComponent;
  let fixture: ComponentFixture<IncometypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncometypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncometypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
