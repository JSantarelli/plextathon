import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPacienteComponent } from './busqueda-paciente.component';

describe('BusquedaPacienteComponent', () => {
  let component: BusquedaPacienteComponent;
  let fixture: ComponentFixture<BusquedaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
