
// export enum tipoCom {"Teléfono Fijo", "Teléfono Celular", "email"};

export interface ISectores {
    id?: string;
    nombre: String;
    hijos?: ISectores[];
}

export interface IOrganizacion {
    id: string;
    nombre: String;
}
