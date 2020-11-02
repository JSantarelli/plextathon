import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AGENDAS } from './../mock-data/mock-agendas';
import { IAgenda } from '../modelos/turnos/IAgenda';


@Injectable({
    providedIn: 'root'
})
export class AgendaService {

    private proSource = new BehaviorSubject<string>('nombre del profesional');
    currentValor = this.proSource.asObservable();

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
