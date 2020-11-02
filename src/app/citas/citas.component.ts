import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AgendaService } from './../servicios/agenda.service';
import { PacienteService } from './../servicios/paciente.service';
import { IAgenda } from './../modelos/turnos/IAgenda';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPaciente } from '../modelos/turnos/IPaciente';


@Component({
    selector: 'citas',
    templateUrl: './citas.component.html',
    styleUrls: ['./citas.component.scss']
})

export class CitasComponent implements OnInit {

    @Output() eventoProfesional = new EventEmitter<string>();
    profesional: string;

    pacientes: Observable<IPaciente[]>;
    pacientes$: Observable<IPaciente[]>;
    public modelo: any;
    public templateModel2: any;
    public prestaciones: any[];
    public profesionales: any[];
    public modelo1 = {
        select: null,
        radio: null
    };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };

    constructor(
        private service: AgendaService,
        private pacienteService: PacienteService,
        private router: Router) {

    }


    ngOnInit() {
        this.pacientes$ = this.pacienteService.getPacientes();

        // plex-select
        this.prestaciones = [{
            id: 1,
            nombre: 'Consulta general de medicina',
        },
        {
            id: 2,
            nombre: 'Consulta de niño sano',
        },
        {
            id: 3,
            nombre: 'Exámen médico del adulto"',
        },
        {
            id: 4,
            nombre: 'Consulta de psicología',
        },
        {
            id: 5,
            nombre: 'Consulta pediátrica de neurología',
        }
        ];

        // plex-select
        this.profesionales = [{
            id: 1,
            nombre: 'Monteverde, María Laura ',
        },
        {
            id: 2,
            nombre: 'Molini, Walter Juan',
        },
        {
            id: 3,
            nombre: 'Mendiguren, Macarena Agustina"',
        },
        {
            id: 4,
            nombre: 'Siracussi, Alejandra Gabriela',
        },
        {
            id: 5,
            nombre: 'Cifuentes, Mónica Patricia',
        }
        ];

        this.modelo1.select = this.prestaciones;
        this.modelo2.select = this.profesionales;

        // plex-bool
        this.modelo = { checkbox: false, slide: false };

        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

    }


    enviarProfesional() {
        this.eventoProfesional.emit(this.profesional);
        console.log(this.profesional);
    }

    goToBusqueda() {
        this.router.navigate(['/busqueda-paciente']);
    }

    goToConfirm() {
        this.router.navigate(['/confirmacion-turno']);
    }

    selected() {
        this.router.navigate([{ outlets: { listado: ['pacientes'] } }],);

    }
}


