import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleprofileComponent } from './templeprofile.component';

describe('TempleprofileComponent', () => {
  let component: TempleprofileComponent;
  let fixture: ComponentFixture<TempleprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
