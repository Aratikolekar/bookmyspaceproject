import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminLayoutComponent } from './client-admin-layout.component';

describe('ClientAdminLayoutComponent', () => {
  let component: ClientAdminLayoutComponent;
  let fixture: ComponentFixture<ClientAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
