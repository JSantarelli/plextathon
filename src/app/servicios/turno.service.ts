import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IAgenda } from '../modelos/turnos/IAgenda';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TURNOS } from '../mock-data/mock-turnos';
import { ITurno } from '../modelos/turnos/ITurno';
import { of, Observable } from 'rxjs';
import { PACIENTES } from '../mock-data/mock-pacientes';
import { IPaciente } from '../modelos/turnos/IPaciente';


@Injectable()

export class TurnoService {

    private router: Router

    horarios: any[] = [
        { hora: '07:00', estado: 'disponible', valor: 'false' },
        { hora: '08:00', estado: 'disponible', valor: 'false' },
        { hora: '09:00', estado: 'disponible', valor: 'false' },
        { hora: '10:00', estado: 'disponible', valor: 'false' },
        { hora: '11:00', estado: 'disponible', valor: 'false' },
        { hora: '12:00', estado: 'disponible', valor: 'false' },
        { hora: '13:00', estado: 'disponible', valor: 'false' },
        { hora: '14:00', estado: 'disponible', valor: 'false' },
        { hora: '15:00', estado: 'disponible', valor: 'false' },
        { hora: '16:00', estado: 'disponible', valor: 'false' },
    ]

    pacientes: IPaciente;
    organizacionList: AngularFireList<any>;
    selectedOrganizacion: IAgenda = new IAgenda();
    organizaciones: any[] = [
    ];

    constructor(private firebase: AngularFireDatabase) {
        console.log('el servicio funciona correctamente');
    }

    getHorarios() {
        return this.horarios;
    }

    getPacientes(): Observable<IPaciente[]> {
        return of(PACIENTES);
    }

    getDetalle() {
        return this.organizaciones;
    }

    getTurnos() {
        //return of(TURNOS);
        return this.organizacionList = this.firebase.list('agendas');
    }

    //getTurno(id: number | string) {
    //    return this.getTurnos().pipe(
    //        map((turnos: ITurno[]) => turnos.find(turno => turno.id === id))
    //    );
    //}

    insertOrganizacion(organizacion: IAgenda) {
        this.organizacionList.push({
            //bloques: organizacion.bloques,
            profesionales: organizacion.profesionales,
            horario: this.horarios,
            nota: organizacion.nota
        });
    }

    updateOrganizacion(organizacion: IAgenda) {
        this.organizacionList.update(
            organizacion.$key, {
            bloques: organizacion.bloques,
            profesionales: organizacion.profesionales,

            horario: this.horarios,
            nota: organizacion.nota
        });
    }

    deleteOrganizacion($key: string) {
        this.organizacionList.remove($key)
    }

}
