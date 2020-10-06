import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/servicios/agenda.service';
import { IAgenda } from './../../modelos/turnos/IAgenda';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'busqueda-paciente',
    templateUrl: './busqueda-paciente.component.html',
    styleUrls: ['./busqueda-paciente.component.css']
})
export class BusquedaPacienteComponent implements OnInit {

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
