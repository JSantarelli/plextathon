import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroupDirective, FormBuilder, ControlContainer, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAgenda } from './../../modelos/turnos/IAgenda';
//import { ITurno } from './../../modelos/turnos/ITurno';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TurnoService, } from './../../servicios/turno.service';
import { ITurno } from 'src/app/modelos/turnos/ITurno';
import { IPaciente } from 'src/app/modelos/turnos/IPaciente';

@Component({
    selector: 'busqueda-paciente',
    templateUrl: './busqueda-paciente.component.html',
    styleUrls: ['./busqueda-paciente.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class BusquedaPacienteComponent implements OnInit {

    childForm;
    pacientes: Observable<IPaciente[]>;
    pacientes$: Observable<IPaciente[]>;
    pacienteSelected: boolean = false;

    turnos$: Observable<ITurno[]>;
    agendas$: Observable<IAgenda[]>;
    selectedId: string;
    value: boolean = false;

    searchTerm$ = new BehaviorSubject<string>('');

    @Output() eventoValor = new EventEmitter<boolean>();
    valor: boolean;

    constructor(
        private router: Router,
        private turnoService: TurnoService,
        private data: PacienteService,
        private pacienteService: PacienteService,
        private parentF: FormGroupDirective,
        private fb: FormBuilder) {
    }
    ngOnInit(): void {
        //this.turnos$ = this.turnoService.getTurnos();
        this.pacientes$ = this.turnoService.getPacientes();
        this.data.currentValor.subscribe(valor => this.valor = valor)

        //this.childForm = this.parentF.form;
        //this.childForm.addControl('paciente', new FormControl(''))
        //this.childForm.addControl('id', new FormControl(''))
        //this.childForm.addControl('nombre', new FormControl(''))
        //this.childForm.addControl('apellido', new FormControl(''))
        //this.childForm.addControl('documento', new FormControl(''))
        //this.childForm.addControl('fechaNacimiento', new FormControl(''))
        //this.childForm.addControl('sexo', new FormControl(''))
        //this.childForm.addControl('telefono', new FormControl(''))
        //this.childForm.addControl('obraSocial', new FormControl(''))
        //this.childForm.addControl('carpetaEfectores', new FormControl(''))
        //this.childForm.addControl('alias', new FormControl(''))
        //this.childForm.addControl('foto', new FormControl(''))
        //this.agendas$ = this.agendaService.getAgendas();
    }

    selected(paciente, turno) {
        this.selectedId = paciente.id;
        //agenda.id = !agenda.id;
        this.router.navigate(['dacion-turno', this.selectedId]);
        // Actualizar valor
        this.data.changeMessage(false)
    }

    enviarValor() {
        this.eventoValor.emit(this.valor);
        console.log(this.valor);
    }

    showPacientes() {
        this.data.currentValor.subscribe(valor => this.valor = valor)
        this.data.changeMessage(false)
    }

}
