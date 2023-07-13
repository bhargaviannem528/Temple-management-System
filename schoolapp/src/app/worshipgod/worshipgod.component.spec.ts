import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipgodComponent } from './worshipgod.component';

describe('WorshipgodComponent', () => {
  let component: WorshipgodComponent;
  let fixture: ComponentFixture<WorshipgodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorshipgodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorshipgodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
