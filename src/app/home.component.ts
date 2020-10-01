import { Component } from '@angular/core';
import { TriageService } from './servicios/triage.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent {
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

    apps = [
        {
            nombre: 'Triage',
            descripcion: 'App para evaluar riesgo de vida del paciente',
            img: 'link a imagen',
            icono: 'hospital',
            color: 'warning',
            link: '/triage',
        },
        {
            nombre: 'Meds',
            descripcion: 'App para evaluar riesgo de vida del paciente',
            img: 'link a imagen',
            icono: 'hospital',
            color: 'warning',
            link: '/meds',
        },
        {
            nombre: 'Run',
            descripcion: 'App para evaluar riesgo de vida del paciente',
            img: 'link a imagen',
            icono: 'hospital',
            color: 'warning',
            link: '/run',
        },
    ]

    constructor(private service: TriageService, private router: Router) {

    }


    ngOnInit() {
        // plex-select
        this.prestaciones = [{
            id: 1,
            nombre: 'Hospital "Dr. Horacio Heller',
            continente: 'Zona metro',
        },
        {
            id: 2,
            nombre: 'Hospital Bouquet Roldán',
            continente: 'Zona metro',
        },
        {
            id: 3,
            nombre: 'Hospital San Martín de los Andes "Dr. Ramón Carrillo"',
            continente: 'Zona tres',
        },
        {
            id: 4,
            nombre: 'Hospital Centenario',
            continente: 'Zona metro',
        },
        {
            id: 5,
            nombre: 'Hospital Provincial Neuquen "Dr. Eduardo Castro Rendón"',
            continente: 'Zona metro',
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
            nombre: 'Hospital Provincial Neuquen "Dr. Eduardo Castro Rendón"',
        }
        ];

        this.modelo1.select = this.prestaciones;
        this.modelo2.select = this.profesionales;

        // plex-bool
        this.modelo = { checkbox: false, slide: false };

        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

    }

    // Desacoplar
    calendario = [
        { fecha: '1', turnos: '5 turnos' },
        { fecha: '2', turnos: '5 turnos' },
        { fecha: '3', turnos: '5 turnos' },
        { fecha: '4', turnos: '5 turnos' },
        { fecha: '5', turnos: '5 turnos' },
        { fecha: '6', turnos: '5 turnos' },
        { fecha: '7', turnos: '5 turnos' },
        { fecha: '8', turnos: '5 turnos' },
        { fecha: '9', turnos: '5 turnos' },
        { fecha: '10', turnos: 'sin turnos' },
        { fecha: '11', turnos: 'sin turnos' },
        { fecha: '12', turnos: 'sin turnos' },
        { fecha: '13', turnos: 'sin turnos' },
        { fecha: '14', turnos: 'sin turnos' },
        { fecha: '15', turnos: 'sin turnos' },
        { fecha: '16', turnos: 'sin turnos' },
        { fecha: '17', turnos: '11 turnos' },
        { fecha: '18', turnos: '11 turnos' },
        { fecha: '19', turnos: '11 turnos' },
        { fecha: '20', turnos: '11 turnos' },
        { fecha: '21', turnos: '11 turnos' },
        { fecha: '22', turnos: '11 turnos' },
        { fecha: '23', turnos: 'sin turnos' },
        { fecha: '24', turnos: 'sin turnos' },
        { fecha: '25', turnos: 'sin turnos' },
        { fecha: '26', turnos: 'sin turnos' },
        { fecha: '27', turnos: 'sin turnos' },
        { fecha: '28', turnos: 'sin turnos' },
        { fecha: '29', turnos: 'sin turnos' },
        { fecha: '30', turnos: 'sin turnos' },
        { fecha: '31', turnos: 'sin turnos' },
    ];

    goMeds() {
        this.router.navigate(['/meds']);
    }
}

