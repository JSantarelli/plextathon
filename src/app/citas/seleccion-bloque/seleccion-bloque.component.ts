import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroupDirective, ControlContainer } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Servicio
import { AgendaService } from './../../servicios/agenda.service';

// Modelo
import { IAgenda } from './../../modelos/turnos/IAgenda';

@Component({
    selector: 'seleccion-bloque',
    templateUrl: './seleccion-bloque.component.html',
    styleUrls: ['./seleccion-bloque.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class SeleccionBloqueComponent implements OnInit {

    agendas$: Observable<IAgenda>;

    constructor(
        private agendaService: AgendaService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {

        this.agendas$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.agendaService.getAgenda(params.get('id')))
        );

    }

}
