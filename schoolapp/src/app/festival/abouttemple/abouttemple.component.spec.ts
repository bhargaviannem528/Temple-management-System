import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttempleComponent } from './abouttemple.component';

describe('AbouttempleComponent', () => {
  let component: AbouttempleComponent;
  let fixture: ComponentFixture<AbouttempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouttempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouttempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
