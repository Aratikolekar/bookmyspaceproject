import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanCreateUsersComponent } from './can-create-users.component';

describe('CanCreateUsersComponent', () => {
  let component: CanCreateUsersComponent;
  let fixture: ComponentFixture<CanCreateUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanCreateUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanCreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
