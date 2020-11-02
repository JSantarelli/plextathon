import { IAgenda } from '../modelos/turnos/IAgenda';

export const AGENDAS: IAgenda[] = [
    {
        $key: "u3r2ewf",
        id: "7o67iurerg",
        intercalar: true,
        tipoPrestaciones: [
            {
                id: "id-y34gwr",
                conceptId: "sct-drg54wf84",
                term: "term-u4he",
                fsn: "fsn-i5k6j4rr54h5",
                semanticTag: "Procedimiento",
                noNominalizada: false,
                auditable: false,
                nombre: "Consulta general de medicina",
            },
        ],
        // profesionales: IProfesional[],
        profesionales: [{
            id: "y9t834hg2owubv",
            nombre: "Molini",
            apellido: "Walter Juan"
        }],
        organizacion: {
            id: "hpn-j2few",
            nombre: "Hospital Provincial Neuquén Dr. Eduardo Castro Rendón"
        },
        espacioFisico: {
            id: "hpn-huemul-0834ufw",
            nombre: "Consultorios Huemul",
            servicio: {
                id: "kinesio-9203rhfinewo",
                nombre: "Kinesiología"
            },
            sector: {
                id: "box-193rq",
                nombre: "Box 1"
            },
        },
        otroEspacioFisico: null,
        horaInicio: "07:00",
        horaFin: "16:00",
        bloques: [
            {
                id: "o86i75ure",
                horaInicio: "07:00",
                horaFin: "10:00",
                cantidadTurnos: 12,
                duracionTurno: 12,
                descripcion: "String",
                tipoPrestaciones: null,
                accesoDirectoDelDia: 12,
                accesoDirectoProgramado: 12,
                reservadoGestion: 12,
                reservadoProfesional: 12,
                restantesDelDia: 12,
                restantesProgramados: 12,
                restantesGestion: 12,
                restantesProfesional: 12,
                restantesMobile: 12,
                pacienteSimultaneos: false,
                cantidadSimultaneos: 12,
                citarPorBloque: false,
                cantidadBloque: 12,
                cupoMobile: 12,
                turnos: null,
                turnosMobile: false,
            },
            {
                id: "y3grewvs",
                horaInicio: "10:00",
                horaFin: "13:00",
                cantidadTurnos: 12,
                duracionTurno: 12,
                descripcion: "String",
                tipoPrestaciones: null,
                accesoDirectoDelDia: 12,
                accesoDirectoProgramado: 12,
                reservadoGestion: 12,
                reservadoProfesional: 12,
                restantesDelDia: 12,
                restantesProgramados: 12,
                restantesGestion: 12,
                restantesProfesional: 12,
                restantesMobile: 12,
                pacienteSimultaneos: false,
                cantidadSimultaneos: 12,
                citarPorBloque: false,
                cantidadBloque: 12,
                cupoMobile: 12,
                turnos: null,
                turnosMobile: false,
            },
            {
                id: "03hg9eve",
                horaInicio: "13:00",
                horaFin: "16:00",
                cantidadTurnos: 12,
                duracionTurno: 12,
                descripcion: "String",
                tipoPrestaciones: null,
                accesoDirectoDelDia: 12,
                accesoDirectoProgramado: 12,
                reservadoGestion: 12,
                reservadoProfesional: 12,
                restantesDelDia: 12,
                restantesProgramados: 12,
                restantesGestion: 12,
                restantesProfesional: 12,
                restantesMobile: 12,
                pacienteSimultaneos: false,
                cantidadSimultaneos: 12,
                citarPorBloque: false,
                cantidadBloque: 12,
                cupoMobile: 12,
                turnos: null,
                turnosMobile: false,
            }
        ],
        prePausada: "prepausada",
        sobreturnos: null,
        turnosDisponibles: 12, // Virtual
        turnosRestantesDelDia: 12, // Virtual
        turnosRestantesProgramados: 12, // Virtual
        turnosRestantesGestion: 12, // Virtual
        turnosRestantesProfesional: 12, // Virtual
        estadosAgendas: null,
        nota: "Esta es una nota perteneciente al bloque",
        nominalizada: true,
        dinamica: true,
        cupo: 12,
        avisos: [{
            profenionalId: "pro-t90jg3nio",
            estado: "Presente",
            fecha: "27/11/20202"
        }],
        estado: "Disponible",
        diagnostico: {
            codificaciones: [],
        },
        estadoFacturacion: {
            estado: "Activa",
            tipo: "Arancelable",
            numeroComprobante: "ticket-8ty0h24fwbeno",
        }
    },
    //{
    //    $key: "u3r2ewf",
    //    id: "12ye0987kh43",
    //    intercalar: true,
    //    tipoPrestaciones: null,
    //    // profesionales: IProfesional[],
    //    profesionales: [{
    //        id: "String",
    //        nombre: "Monteverde",
    //        apellido: "María Laura"
    //    }],
    //    organizacion: {
    //        id: "String",
    //        nombre: "String"
    //    },
    //    espacioFisico: {
    //        id: "String",
    //        nombre: "String",
    //        servicio: {
    //            id: "String",
    //            nombre: "String"
    //        },
    //        sector: {
    //            id: "String",
    //            nombre: "String"
    //        },
    //    },
    //    otroEspacioFisico: null,
    //    horaInicio: "String",
    //    horaFin: "String",
    //    bloques: [
    //        {
    //            id: "o86i75ure",
    //            horaInicio: "07:00",
    //            horaFin: "10:00",
    //            cantidadTurnos: 12,
    //            duracionTurno: 12,
    //            descripcion: "String",
    //            tipoPrestaciones: null,
    //            accesoDirectoDelDia: 12,
    //            accesoDirectoProgramado: 12,
    //            reservadoGestion: 12,
    //            reservadoProfesional: 12,
    //            restantesDelDia: 12,
    //            restantesProgramados: 12,
    //            restantesGestion: 12,
    //            restantesProfesional: 12,
    //            restantesMobile: 12,
    //            pacienteSimultaneos: false,
    //            cantidadSimultaneos: 12,
    //            citarPorBloque: false,
    //            cantidadBloque: 12,
    //            cupoMobile: 12,
    //            turnos: null,
    //            turnosMobile: false,
    //        },
    //        {
    //            id: "y3grewvs",
    //            horaInicio: "10:00",
    //            horaFin: "13:00",
    //            cantidadTurnos: 12,
    //            duracionTurno: 12,
    //            descripcion: "String",
    //            tipoPrestaciones: null,
    //            accesoDirectoDelDia: 12,
    //            accesoDirectoProgramado: 12,
    //            reservadoGestion: 12,
    //            reservadoProfesional: 12,
    //            restantesDelDia: 12,
    //            restantesProgramados: 12,
    //            restantesGestion: 12,
    //            restantesProfesional: 12,
    //            restantesMobile: 12,
    //            pacienteSimultaneos: false,
    //            cantidadSimultaneos: 12,
    //            citarPorBloque: false,
    //            cantidadBloque: 12,
    //            cupoMobile: 12,
    //            turnos: null,
    //            turnosMobile: false,
    //        },
    //    ],
    //    prePausada: "String",
    //    sobreturnos: null,
    //    turnosDisponibles: 12, // Virtual
    //    turnosRestantesDelDia: 12, // Virtual
    //    turnosRestantesProgramados: 12, // Virtual
    //    turnosRestantesGestion: 12, // Virtual
    //    turnosRestantesProfesional: 12, // Virtual
    //    estadosAgendas: null,
    //    nota: "String",
    //    nominalizada: true,
    //    dinamica: true,
    //    cupo: 12,
    //    avisos: [{
    //        profenionalId: "String",
    //        estado: "String",
    //        fecha: "String"
    //    }],
    //    estado: "String",
    //    diagnostico: {
    //        codificaciones: [],
    //    },
    //    estadoFacturacion: {
    //        estado: "String",
    //        tipo: "String",
    //        numeroComprobante: "String",
    //    }
    //}
]
