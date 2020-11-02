import { ITipoPrestacion } from './../ITipoPrestacion';
import { IObraSocial } from './../IObraSocial';
import { IOrganizacion } from '../IOrganizacion';

// TODO: Recordar actualizar Schema!
export class ITurno {
    id: string;
    horaInicio: String;
    estado: string;
    asistencia: string;
    paciente: {
        id: string,
        nombre: string,
        apellido: string,
        alias: string,
        documento: string,
        fechaNacimiento: String,
        telefono: String,
        sexo: String,
        carpetaEfectores: [{
            organizacion: IOrganizacion,
            nroCarpeta: string,
            id: String,
        }],
        obraSocial: IObraSocial,
        foto: String;
    };
    tipoPrestacion: ITipoPrestacion;
    idPrestacionPaciente: string;
    tipoTurno: string;
    reasignado: {
        anterior: {
            idAgenda: string,
            idBloque: string,
            idTurno: string
        }
        siguiente: {
            idAgenda: string,
            idBloque: string,
            idTurno: string
        }
    };
    carpetaEfectores?: [{
        organizacion: {
            id: string;
            nombre: string
        },
        nroCarpeta: string
    }];
    nota: string;
    motivoSuspension: String;
    avisoSuspension: String;
    diagnostico: {
        codificaciones: [];
    };
    estadoFacturacion: {
        estado: String;
        tipo: String;
        numeroComprobante: String;
    }
    auditable: Boolean;
    emitidoPor: String;
    fechaHoraDacion: String;
    motivoConsulta: String;
    horaAsistencia: String;
}
