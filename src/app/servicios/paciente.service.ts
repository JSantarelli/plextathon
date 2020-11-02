import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


import { PACIENTES } from '../mock-data/mock-pacientes';
import { IPaciente } from '../../app/modelos/turnos/IPaciente'

@Injectable({
    providedIn: 'root'
})
export class PacienteService {

    private valorSource = new BehaviorSubject<boolean>(true);
    currentValor = this.valorSource.asObservable();

    getPacientes(): Observable<IPaciente[]> {
        return of(PACIENTES);

    }

    getPaciente(id: number | string) {
        return this.getPacientes().pipe(
            map((pacientes: IPaciente[]) => pacientes.find(paciente => paciente.id === id))
        );
    }

    changeMessage(valor: boolean) {
        this.valorSource.next(valor);
    }

    constructor() { }
}
