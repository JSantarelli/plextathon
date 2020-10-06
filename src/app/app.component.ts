import { Component } from '@angular/core';
import { AgendaService } from './servicios/agenda.service';
//import { Agenda } from './modelos/turnos/IAgenda';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'plextathon';

    constructor(private service: AgendaService) {

    }
}

