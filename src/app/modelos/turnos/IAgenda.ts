import { ITurno } from './ITurno';
import { ITipoPrestacion } from './../ITipoPrestacion';
import { IBloque } from './IBloque';
import { IEspacioFisico } from './IEspacioFisico';

// Recordar actualizar Schema!

export class IAgenda {
    $key: string;
    id: String;
    intercalar: Boolean;
    tipoPrestaciones: ITipoPrestacion[];
    // profesionales: IProfesional[];
    profesionales: [{
        id: String,
        nombre: String,
        apellido: String
    }];
    organizacion: {
        id: String,
        nombre: String
    };
    espacioFisico: {
        id: String,
        nombre: String,
        servicio: {
            id: String,
            nombre: String
        };
        sector: {
            id: String,
            nombre: String
        };
    };
    otroEspacioFisico: IEspacioFisico;
    horaInicio: String;
    horaFin: String;
    bloques: IBloque[];
    prePausada: String;
    sobreturnos?: ITurno[];
    turnosDisponibles: number; // Virtual
    turnosRestantesDelDia: number; // Virtual
    turnosRestantesProgramados: number; // Virtual
    turnosRestantesGestion: number; // Virtual
    turnosRestantesProfesional: number; // Virtual
    estadosAgendas: String[];
    nota: String;
    nominalizada: Boolean;
    dinamica: Boolean;
    cupo: Number;
    avisos: [{
        profenionalId: String,
        estado: String,
        fecha: String
    }];
    estado: String;
    diagnostico: {
        codificaciones: [],
    };
    estadoFacturacion: {
        estado: String,
        tipo: String,
        numeroComprobante: String,
    }
};




    //$key: string;
    //efector: string;
    //nombre: string;
    //fecha: Date;
    //municipio: string;
    //lat: number;
    //lng: number;
    //capacitados: number;
    //nota: string;
    //horarios: string;
    //hora: string;
    //horario: {
    //    hora: string;
    //    estado: string;
    //};
    //siete: boolean;
    //ocho: boolean;
    //nueve: boolean;
    //diez: boolean;
    //once: boolean;
    //doce: boolean;
    //una: boolean;
    //dos: boolean;
    //tres: boolean;
    //cuatro: boolean;
    //paciente: {
    //    id: string,
    //    nombre: string,
    //    apellido: string,
    //    alias: string,
    //    documento: string,
    //    fechaNacimiento: String,
    //    telefono: String,
    //    sexo: String,
    //    carpetaEfectores: [{
    //        organizacion: {
    //            id: String,
    //            nombre: String
    //        },
    //        nroCarpeta: string,
    //        id: String,
    //    }],
    //    obraSocial: [
    //        {
    //            codigoPuco?: Number;
    //            nombre: String;
    //            financiador: String;
    //        }
    //    ]
    //    foto: String;

