import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanCreateRoomsComponent } from './can-create-rooms.component';

describe('CanCreateRoomsComponent', () => {
  let component: CanCreateRoomsComponent;
  let fixture: ComponentFixture<CanCreateRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanCreateRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanCreateRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
