import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListeComponent } from './employer-liste.component';

describe('EmployerListeComponent', () => {
  let component: EmployerListeComponent;
  let fixture: ComponentFixture<EmployerListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
