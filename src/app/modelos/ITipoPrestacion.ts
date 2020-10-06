export interface ITipoPrestacion {
    id: String;
    conceptId: String;
    term: String;
    fsn: String;
    semanticTag: String;
    noNominalizada?: Boolean;
    auditable: Boolean;
    nombre: String;
}
