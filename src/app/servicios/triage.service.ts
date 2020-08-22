import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TriageService {

    triage = [
        {
            id: 1,
            paciente: "string",
            tipo: "string",
            nivel: 1,
            color: "string",
            tiempo: 4,
            unidad: "horas",
            motricidad: true,
            entendimiento: false,
            habla: false,
            respiracion: true,
            accion: "Practicar RCP",
            causa: "Insuficiencia respiratoria",
            presuntivo: "Falla cardio-respiratoria",

        },
    ]


    constructor() { }
}
