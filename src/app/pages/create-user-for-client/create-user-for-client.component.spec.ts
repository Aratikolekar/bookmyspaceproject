import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserForClientComponent } from './create-user-for-client.component';

describe('CreateUserForClientComponent', () => {
  let component: CreateUserForClientComponent;
  let fixture: ComponentFixture<CreateUserForClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserForClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
