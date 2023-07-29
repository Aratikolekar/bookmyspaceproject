import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePackagesComponent } from './active-packages.component';

describe('ActivePackagesComponent', () => {
  let component: ActivePackagesComponent;
  let fixture: ComponentFixture<ActivePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
