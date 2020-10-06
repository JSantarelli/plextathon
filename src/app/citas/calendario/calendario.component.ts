import { Component, OnInit } from '@angular/core';
import { AgendaService } from './../../servicios/agenda.service';
import { IAgenda } from './../../modelos/turnos/IAgenda';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'calendario',
    templateUrl: './calendario.component.html',
    styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {


    agendas$: Observable<IAgenda[]>;
    selectedId: string;

    constructor(private agendaService: AgendaService, private router: Router,) { }

    ngOnInit(): void {

        this.agendas$ = this.agendaService.getAgendas();

    }

    selected(agenda) {
        this.selectedId = agenda.id;
        this.router.navigate(['dacion-turno', this.selectedId]);
    }
}
