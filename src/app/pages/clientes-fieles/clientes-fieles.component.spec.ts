import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFielesComponent } from './clientes-fieles.component';

describe('ClientesFielesComponent', () => {
  let component: ClientesFielesComponent;
  let fixture: ComponentFixture<ClientesFielesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesFielesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesFielesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
