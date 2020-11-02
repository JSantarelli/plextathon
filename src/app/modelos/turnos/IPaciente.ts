import { IObraSocial } from './../IObraSocial';
import { IOrganizacion } from '../IOrganizacion';

export interface IPaciente {
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