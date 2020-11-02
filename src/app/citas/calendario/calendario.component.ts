import { Component, OnInit } from '@angular/core';
import { AgendaService } from './../../servicios/agenda.service';
import { TurnoService } from './../../servicios/turno.service';
import { PacienteService } from './../../servicios/paciente.service';
import { IAgenda } from './../../modelos/turnos/IAgenda';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'calendario',
    templateUrl: './calendario.component.html',
    styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

    semana = [
        {
            nombre: 'domingo',
        },
        {
            nombre: 'lunes',
        },
        {
            nombre: 'martes',
        },
        {
            nombre: 'miércoles',
        },
        {
            nombre: 'jueves',
        },
        {
            nombre: 'viernes',
        },
        {
            nombre: 'sábado',
        },
    ];

    // Desacoplar
    mes = [
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

    organizacionList: IAgenda[];
    agendas$: Observable<IAgenda[]>;
    selectedId: string;

    constructor(
        private agendaService: AgendaService,
        private pacienteService: PacienteService,
        private turnoService: TurnoService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {

        this.agendas$ = this.agendaService.getAgendas();
        this.turnoService.getTurnos();
        this.pacienteService.getPacientes();

    }

    selected(agenda) {
        this.selectedId = agenda.id;
        //agenda.id = !agenda.id;
        //this.router.navigate([{ outlets: { bloques: ['bloques'] } }],);
        this.router.navigate(['dacion-turno', this.selectedId]);
    }
}
