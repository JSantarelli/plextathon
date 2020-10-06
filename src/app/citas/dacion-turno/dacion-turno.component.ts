import { Component, OnInit, ContentChild } from '@angular/core';
import { AgendaService } from './../../servicios/agenda.service';
import { IAgenda } from './../../modelos/turnos/IAgenda';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
//import { PlexOptionsComponent } from './lib/options/options.component';

@Component({
    selector: 'dacion-turno',
    templateUrl: './dacion-turno.component.html',
    styleUrls: ['./dacion-turno.component.css']
})
export class DacionTurnoComponent implements OnInit {

    //@ContentChild(PlexOptionsComponent, { static: true }) plexOptions: PlexOptionsComponent;

    public listadoAgenda: IAgenda[];
    agenda$: Observable<IAgenda>;

    agendas$: Observable<IAgenda[]>;
    selectedId: string;

    public items = [
        {
            label: 'opcion 1',
            key: '1',
        },
        {
            label: 'opcion 2',
            key: '2',
        },
        {
            label: 'opcion 3',
            key: '3',
        }
    ];

    public horarios = [
        {
            hora: '07:00',
            turnoDoble: false,
        },
        {
            hora: '07:20',
            turnoDoble: false,
        },
        {
            hora: '07:40',
            turnoDoble: false,
        },
        {
            hora: '08:00',
            turnoDoble: false,
        },
        {
            hora: '08:20',
            turnoDoble: false,
        },
        {
            hora: '08:40',
            turnoDoble: false,
        },
        {
            hora: '09:00',
            turnoDoble: false,
        },
        {
            hora: '09:20',
            turnoDoble: false,
        },
        {
            hora: '09:40',
            turnoDoble: false,
        },
        {
            hora: '10:00',
            turnoDoble: false,
        },
        {
            hora: '10:20',
            turnoDoble: false,
        },
        {
            hora: '10:40',
            turnoDoble: false,
        },
        {
            hora: '11:00',
            turnoDoble: false,
        },
        {
            hora: '11:20',
            turnoDoble: false,
        },
        {
            hora: '11:40',
            turnoDoble: false,
        },
        {
            hora: '12:00',
            turnoDoble: false,
        },
        {
            hora: '12:20',
            turnoDoble: false,
        },
        {
            hora: '12:40',
            turnoDoble: false,
        },
        {
            hora: '13:00',
            turnoDoble: false,
        },
        {
            hora: '13:20',
            turnoDoble: false,
        },
        {
            hora: '13:40',
            turnoDoble: false,
        },
        {
            hora: '14:00',
            turnoDoble: false,
        },
        {
            hora: '14:20',
            turnoDoble: false,
        },
        {
            hora: '14:40',
            turnoDoble: false,
        },
        {
            hora: '15:00',
            turnoDoble: false,
        },
        {
            hora: '15:20',
            turnoDoble: false,
        },
        {
            hora: '15:40',
            turnoDoble: false,
        },
    ];

    public viewOptions = true;
    public selectedOption = '1';

    constructor(
        private agendaService: AgendaService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }


    ngOnInit(): void {

        this.agendas$ = this.agendaService.getAgendas();

        this.agenda$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.agendaService.getAgenda(params.get('id')))
        );
    }

    selected(agenda) {
        this.selectedId = agenda.id;
        this.router.navigate(['', this.selectedId]);
    }

    selectedBloque(agenda) {
        this.selectedId = agenda.id;
        agenda.selected = !agenda.selected
        this.router.navigate(['', this.selectedId]);
    }

    gotoAgendas(agenda: IAgenda) {
        const agendaId = agenda ? agenda.id : null;
        this.router.navigate(['/citas', { id: agendaId }]);
    }

    toggleItems() {
        if (this.items.length === 2) {
            this.items.push({ label: 'opcion 3', key: '3' });
        } else {
            this.items = this.items.filter(item => item.key !== '3');
            this.items = [
                { label: 'otras 1', key: '7' },
                { label: 'otas 2', key: '8' },
            ];
        }
    }

}
