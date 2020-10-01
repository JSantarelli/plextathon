import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MedsService {

    medicamento = [{
        id: '32urjwedn',
        nombre: 'string',
        estado: 'string',
        vigencia: 'number',
        via: 'string',
        forma: 'string',
        dosis: 'number',
        frecuencia: 'number',
        horario: 'Date',
        duracion: 'string',
        unidad: 'string',
        fechaInicio: 'string',
        fechaFin: 'string',
        distribucion: 'number',
        concepto: 'string',
        prospecto: 'boolean',
        accionTerapeutica: 'string',
    }
    ];


    getMedicamentos() {
        return this.medicamento;
    }


    constructor() { }
}
