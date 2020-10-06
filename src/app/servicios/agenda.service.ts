import { Injectable } from '@angular/core';
import { IAgenda } from './../modelos/turnos/IAgenda';
import { AGENDAS } from './../data/data-agendas';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AgendaService {

    getAgendas(): Observable<IAgenda[]> {
        return of(AGENDAS);
    }

    getAgenda(id: number | string) {
        return this.getAgendas().pipe(
            map((agendas: IAgenda[]) => agendas.find(agenda => agenda.id === id))
        );
    }

    constructor() { }
}
