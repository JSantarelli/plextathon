import { IContacto } from './IContacto';

export interface IEdificio {
    id: String;
    descripcion: String;
    contacto: IContacto;
    direccion: String;
}
