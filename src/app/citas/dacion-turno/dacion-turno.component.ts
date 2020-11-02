import { Component, OnInit, ContentChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Servicio
import { TurnoService } from './../../servicios/turno.service';
import { AgendaService } from './../../servicios/agenda.service';
import { PacienteService } from './../../servicios/paciente.service';


// Modelo
import { IAgenda } from './../../modelos/turnos/IAgenda';
import { ListadoTurnosComponent } from '../../citas/listado-turnos/listado-turnos.component';
import { ITurno } from 'src/app/modelos/turnos/ITurno';
import { IPaciente } from 'src/app/modelos/turnos/IPaciente';

@Component({
    selector: 'dacion-turno',
    templateUrl: './dacion-turno.component.html',
    styleUrls: ['./dacion-turno.component.css']
})
export class DacionTurnoComponent implements OnInit {

    childForm;
    agendas$: Observable<IAgenda>;
    turnos$: Observable<ITurno>;
    pacientes$: Observable<IPaciente>;
    profesional: string;
    valor: boolean;
    nota: boolean = false;

    // Binding modulos e insercion en Firebase
    organizacionList: IAgenda[];
    editar = ListadoTurnosComponent;
    organizacionSeleccionada = null;

    organizacionForm = new FormGroup({
        '$key': new FormControl(),
        'motivo': new FormControl(),
        'nota': new FormControl(),
        'profesionales': new FormControl(),
    })

    searchTerm: string;

    constructor(
        private turnoService: TurnoService,
        private pacienteService: PacienteService,
        private data: PacienteService,
        private pro: AgendaService,
        private route: ActivatedRoute,
        private parentF: FormGroupDirective,
        private agendaService: AgendaService
    ) { }


    ngOnInit() {

        this.pacientes$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.pacienteService.getPaciente(params.get('id')))
        );

        // Recepción de valor para eliminar plex-label
        this.data.currentValor.subscribe(valor => this.valor = valor)
        this.pro.currentValor.subscribe(profesional => this.profesional = profesional)

        this.resetForm();

        this.turnoService.getTurnos()
            .snapshotChanges()
            .subscribe(Item => {
                this.organizacionList = [];
                Item.forEach(element => {
                    let x = element.payload.toJSON();
                    x["$key"] = element.key;
                    this.organizacionList.push(x as IAgenda);
                })
            })

    }

    recibirValor($event) {
        this.valor = $event;
    }

    recibirProfesional($event) {
        this.profesional = $event;
        console.log(this.profesional)
    }

    mostrarNota() {
        this.nota = !this.nota;
    }

    onSubmit(organizacionForm: NgForm) {
        if (organizacionForm.value.$key == null)
            this.turnoService.insertOrganizacion(organizacionForm.value)
        else
            this.turnoService.updateOrganizacion(organizacionForm.value);

        this.resetForm(organizacionForm);
    }

    resetForm(organizacionForm?: NgForm) {
        if (organizacionForm != null)
            organizacionForm.reset();
        this.turnoService.selectedOrganizacion = new IAgenda();
    }

    onEdit(organizacion: IAgenda) {
        this.turnoService.selectedOrganizacion = Object.assign({}, organizacion);
    }

    onDelete($key: string) {
        var answer = confirm('Desea eliminar este efector');
        console.log(answer);
        if (answer) {
            this.turnoService.deleteOrganizacion($key);
        }
    }
}
