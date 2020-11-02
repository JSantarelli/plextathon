import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, FormControl, FormBuilder, FormGroup, FormArray, ControlContainer } from '@angular/forms';
import { AgendaService } from 'src/app/servicios/agenda.service';
import { Router } from '@angular/router';
import { TurnoService } from './../../servicios/turno.service';

@Component({
    selector: 'seleccion-horario',
    templateUrl: './seleccion-horario.component.html',
    styleUrls: ['./seleccion-horario.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class SeleccionHorarioComponent implements OnInit {

    checkboxForm;
    horariosForm: FormGroup;
    horarios: any[] = [];

    constructor(private agendaService: AgendaService, private router: Router, private organizacionService: TurnoService, private parentF: FormGroupDirective, private fb: FormBuilder) {

        this.horarios = organizacionService.getHorarios();
        const FormControls = this.horarios.map(control => new FormControl(false));

        this.horariosForm = this.fb.group({
            horarios: new FormArray(FormControls)
        });
        console.log(this.horariosForm)
    }

    ngOnInit(): void {
        this.checkboxForm = this.parentF.form;
        this.checkboxForm.addControl('horario', new FormControl(''))
        this.checkboxForm.addControl('07:00', new FormControl(''))
        this.checkboxForm.addControl('08:00', new FormControl(''))
        this.checkboxForm.addControl('09:00', new FormControl(''))
        this.checkboxForm.addControl('10:00', new FormControl(''))
        this.checkboxForm.addControl('11:00', new FormControl(''))
        this.checkboxForm.addControl('12:00', new FormControl(''))
        this.checkboxForm.addControl('13:00', new FormControl(''))
        this.checkboxForm.addControl('14:00', new FormControl(''))
        this.checkboxForm.addControl('15:00', new FormControl(''))
        this.checkboxForm.addControl('16:00', new FormControl(''))
    }

}
