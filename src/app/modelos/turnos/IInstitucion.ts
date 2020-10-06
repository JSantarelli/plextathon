import { IContacto } from '../IContacto';

export interface IInstitucion {
    id: string;
    nombre: String;
    detalle: String;
    tipo: String;
    contacto: IContacto;
    direccion: String;
    activo: Boolean;
    estado: String;
}
