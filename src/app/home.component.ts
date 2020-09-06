import { Component } from '@angular/core';
import { TriageService } from './servicios/triage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent {

    apps = [
        {
            nombre: 'Triage',
            descripcion: 'App para evaluar riesgo de vida del paciente',
            img: 'link a imagen',
            icono: 'hospital',
            color: 'warning',
        },
        {
            nombre: 'Meds',
            descripcion: 'App para evaluar riesgo de vida del paciente',
            img: 'link a imagen',
            icono: 'hospital',
            color: 'warning',
        },
        {
            nombre: 'Run',
            descripcion: 'App para evaluar riesgo de vida del paciente',
            img: 'link a imagen',
            icono: 'hospital',
            color: 'warning',
        },
    ]


    constructor(private service: TriageService) {

    }
}

