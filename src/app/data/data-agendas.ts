import { IAgenda } from '../modelos/turnos/IAgenda';

export const AGENDAS: IAgenda[] = [

    {
        intercalar: false,
        id: '001',
        diagnostico: {
            codificaciones: [

            ]
        },
        fechaHora: "",
        auditable: false,
        emitidoPor: "",
        horaInicio: '13:00 hs.',
        estadoFacturacion: {
            estado: "Sin comprobante",
        },
        tipoPrestaciones: [{
            id: "t5423535yt",
            conceptId: "270352002",
            term: "String",
            fsn: "String",
            semanticTag: "Procedimiento",
            //noNominalizada?: '',
            auditable: false,
            nombre: "Consulta general de Medicina",
        }],

        estado: "pendienteAsistencia",
        nominalizada: true,
        dinamica: false,
        bloques: [
            {
                id: '',
                cantidadBloque: 3,
                cantidadTurnos: 12,
                cantidadSimultaneos: 3,
                duracionTurno: 15,
                descripcion: '',
                horaInicio: '',
                horaFin: '',
                accesoDirectoDelDia: 4,
                accesoDirectoProgramado: 2,
                reservadoGestion: 3,
                reservadoProfesional: 3,
                cupoMobile: 2,
                restantesDelDia: 3,
                restantesProgramados: 0,
                restantesGestion: 0,
                restantesProfesional: 0,
                restantesMobile: 2,
                pacienteSimultaneos: false,
                citarPorBloque: false,
                turnosMobile: true,
                tipoPrestaciones: [
                    {
                        auditable: true,
                        fsn: "Consulta de medicina general (procedimiento)",
                        semanticTag: "procedimiento",
                        conceptId: "391000013108",
                        term: "Consulta de medicina general",
                        nombre: "Consulta de medicina general",
                        id: "59ee2d9bf00c415246fd3d6a"
                    }
                ],
                turnos: [
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:00:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:04:10.105Z",
                        motivoConsulta: "Dolor abdominal",
                        nota: "Esta es una nota del turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "HPN-48uh38rhnas",
                                    id: "5f77092acbaf2579ee8c9e84"
                                }
                            ],
                            id: "5a4268a9db4ebc1dbdc94ece",
                            documento: "50604147",
                            apellido: "DIAZ OLIVA",
                            nombre: "VICTORIA",
                            fechaNacimiento: "2010-09-01T03:00:00.000Z",
                            sexo: "femenino",
                            telefono: "29951860602",
                            obraSocial: {
                                codigoPuco: 108803,
                                nombre: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA",
                                financiador: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA"
                            },
                            alias: "",

                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:10:26.678Z",
                        id: "5f7708a4cbaf2579ee8c9e27"
                    },

                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:30:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:25:13.815Z",
                        motivoConsulta: "Migraña frecuente",
                        nota: "Esta es una nota",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "hpn-38rhbd03fs",
                                    id: "5f770e1930d99d7a226cd1d0"
                                }
                            ],
                            id: "586e6e8627d3107fde116337",
                            documento: "6922003",
                            apellido: "ARANA",
                            nombre: "RUBEN BERNARDO",
                            fechaNacimiento: "1933-02-18T03:00:00.000Z",
                            sexo: "masculino",
                            telefono: "2213842923",
                            obraSocial: {
                                codigoPuco: 921001,
                                nombre: "O.S.P. NEUQUEN",
                                financiador: "O.S.P. NEUQUEN"
                            },
                            alias: '',
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "5f7708a4cbaf2579ee8c9e25"
                    },
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T11:30:00.000Z",
                        auditable: true,
                        emitidoPor: "turno telefonico",
                        fechaHoraDacion: "2020-10-02T11:04:54.662Z",
                        motivoConsulta: "Insomnio",
                        nota: "Otra nota para ver en el turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "PDR31359294",
                                    id: "5a33ca1c1524384ea0d36360"
                                }
                            ],
                            id: "5a33c9de1524384ea0d35c1d",
                            documento: "31359294",
                            apellido: "SANTARELLI",
                            nombre: "JULIO NICOLÁS ",
                            fechaNacimiento: "1984-12-06T13:10:00.736Z",
                            sexo: "masculino",
                            telefono: "2995186062",
                            obraSocial: {
                                codigoPuco: 921001,
                                nombre: "O.S.P. NEUQUEN",
                                financiador: "O.S.P. NEUQUEN"
                            },
                            alias: "Julito",
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "57e9670e52df311059bc8964",
                        //nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON"
                    }
                ],
            },
            {
                id: '',
                cantidadBloque: 3,
                cantidadTurnos: 12,
                cantidadSimultaneos: 3,
                duracionTurno: 15,
                descripcion: '',
                horaInicio: '',
                horaFin: '',
                accesoDirectoDelDia: 4,
                accesoDirectoProgramado: 2,
                reservadoGestion: 3,
                reservadoProfesional: 3,
                cupoMobile: 2,
                restantesDelDia: 3,
                restantesProgramados: 0,
                restantesGestion: 0,
                restantesProfesional: 0,
                restantesMobile: 2,
                pacienteSimultaneos: false,
                citarPorBloque: false,
                turnosMobile: true,
                tipoPrestaciones: [
                    {
                        auditable: true,
                        fsn: "Consulta de medicina general (procedimiento)",
                        semanticTag: "procedimiento",
                        conceptId: "391000013108",
                        term: "Consulta de medicina general",
                        nombre: "Consulta de medicina general",
                        id: "59ee2d9bf00c415246fd3d6a"
                    }
                ],
                turnos: [
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:00:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:04:10.105Z",
                        motivoConsulta: "Dolor abdominal",
                        nota: "Esta es una nota del turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "HPN-48uh38rhnas",
                                    id: "5f77092acbaf2579ee8c9e84"
                                }
                            ],
                            id: "5a4268a9db4ebc1dbdc94ece",
                            documento: "50604147",
                            apellido: "DIAZ OLIVA",
                            nombre: "VICTORIA",
                            fechaNacimiento: "2010-09-01T03:00:00.000Z",
                            sexo: "femenino",
                            telefono: "29951860602",
                            obraSocial: {
                                codigoPuco: 108803,
                                nombre: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA",
                                financiador: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA"
                            },
                            alias: "",

                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:10:26.678Z",
                        id: "5f7708a4cbaf2579ee8c9e27"
                    },

                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:30:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:25:13.815Z",
                        motivoConsulta: "Migraña frecuente",
                        nota: "Esta es una nota",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "hpn-38rhbd03fs",
                                    id: "5f770e1930d99d7a226cd1d0"
                                }
                            ],
                            id: "586e6e8627d3107fde116337",
                            documento: "6922003",
                            apellido: "ARANA",
                            nombre: "RUBEN BERNARDO",
                            fechaNacimiento: "1933-02-18T03:00:00.000Z",
                            sexo: "masculino",
                            telefono: "2213842923",
                            obraSocial: {
                                codigoPuco: 921001,
                                nombre: "O.S.P. NEUQUEN",
                                financiador: "O.S.P. NEUQUEN"
                            },
                            alias: '',
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "5f7708a4cbaf2579ee8c9e25"
                    },
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T11:30:00.000Z",
                        auditable: true,
                        emitidoPor: "turno telefonico",
                        fechaHoraDacion: "2020-10-02T11:04:54.662Z",
                        motivoConsulta: "Insomnio",
                        nota: "Otra nota para ver en el turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "PDR31359294",
                                    id: "5a33ca1c1524384ea0d36360"
                                }
                            ],
                            id: "5a33c9de1524384ea0d35c1d",
                            documento: "31359294",
                            apellido: "SANTARELLI",
                            nombre: "JULIO NICOLÁS ",
                            fechaNacimiento: "1984-12-06T13:10:00.736Z",
                            sexo: "masculino",
                            telefono: "2995186062",
                            obraSocial: {
                                codigoPuco: 921001,
                                nombre: "O.S.P. NEUQUEN",
                                financiador: "O.S.P. NEUQUEN"
                            },
                            alias: "Julito",
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "57e9670e52df311059bc8964",
                        //nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON"
                    }
                ],
            },
            {
                id: '',
                cantidadBloque: 3,
                cantidadTurnos: 12,
                cantidadSimultaneos: 3,
                duracionTurno: 15,
                descripcion: '',
                horaInicio: '',
                horaFin: '',
                accesoDirectoDelDia: 4,
                accesoDirectoProgramado: 2,
                reservadoGestion: 3,
                reservadoProfesional: 3,
                cupoMobile: 2,
                restantesDelDia: 3,
                restantesProgramados: 0,
                restantesGestion: 0,
                restantesProfesional: 0,
                restantesMobile: 2,
                pacienteSimultaneos: false,
                citarPorBloque: false,
                turnosMobile: true,
                tipoPrestaciones: [
                    {
                        auditable: true,
                        fsn: "Consulta de medicina general (procedimiento)",
                        semanticTag: "procedimiento",
                        conceptId: "391000013108",
                        term: "Consulta de medicina general",
                        nombre: "Consulta de medicina general",
                        id: "59ee2d9bf00c415246fd3d6a"
                    }
                ],
                turnos: [
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:00:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:04:10.105Z",
                        motivoConsulta: "Dolor abdominal",
                        nota: "Esta es una nota del turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "HPN-48uh38rhnas",
                                    id: "5f77092acbaf2579ee8c9e84"
                                }
                            ],
                            id: "5a4268a9db4ebc1dbdc94ece",
                            documento: "50604147",
                            apellido: "DIAZ OLIVA",
                            nombre: "VICTORIA",
                            fechaNacimiento: "2010-09-01T03:00:00.000Z",
                            sexo: "femenino",
                            telefono: "29951860602",
                            obraSocial: {
                                codigoPuco: 108803,
                                nombre: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA",
                                financiador: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA"
                            },
                            alias: "",

                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:10:26.678Z",
                        id: "5f7708a4cbaf2579ee8c9e27"
                    },

                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:30:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:25:13.815Z",
                        motivoConsulta: "Migraña frecuente",
                        nota: "Esta es una nota",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "hpn-38rhbd03fs",
                                    id: "5f770e1930d99d7a226cd1d0"
                                }
                            ],
                            id: "586e6e8627d3107fde116337",
                            documento: "6922003",
                            apellido: "ARANA",
                            nombre: "RUBEN BERNARDO",
                            fechaNacimiento: "1933-02-18T03:00:00.000Z",
                            sexo: "masculino",
                            telefono: "2213842923",
                            obraSocial: {
                                codigoPuco: 921001,
                                nombre: "O.S.P. NEUQUEN",
                                financiador: "O.S.P. NEUQUEN"
                            },
                            alias: '',
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "5f7708a4cbaf2579ee8c9e25"
                    },
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T11:30:00.000Z",
                        auditable: true,
                        emitidoPor: "turno telefonico",
                        fechaHoraDacion: "2020-10-02T11:04:54.662Z",
                        motivoConsulta: "Insomnio",
                        nota: "Otra nota para ver en el turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "PDR31359294",
                                    id: "5a33ca1c1524384ea0d36360"
                                }
                            ],
                            id: "5a33c9de1524384ea0d35c1d",
                            documento: "31359294",
                            apellido: "SANTARELLI",
                            nombre: "JULIO NICOLÁS ",
                            fechaNacimiento: "1984-12-06T13:10:00.736Z",
                            sexo: "masculino",
                            telefono: "2995186062",
                            obraSocial: {
                                codigoPuco: 921001,
                                nombre: "O.S.P. NEUQUEN",
                                financiador: "O.S.P. NEUQUEN"
                            },
                            alias: "Julito",
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "57e9670e52df311059bc8964",
                        //nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON"
                    }
                ],
            },
        ],
    },
    {
        intercalar: false,
        id: '002',
        diagnostico: {
            codificaciones: [

            ]
        },
        fechaHora: "",
        auditable: false,
        emitidoPor: "",
        horaInicio: '13:00 hs.',
        estadoFacturacion: {
            estado: "Sin comprobante",
        },
        tipoPrestaciones: [{
            id: "String",
            conceptId: "String",
            term: "String",
            fsn: "String",
            semanticTag: "String",
            //noNominalizada?: '',
            auditable: false,
            nombre: "String",
        }],

        estado: "pendienteAsistencia",
        nominalizada: true,
        dinamica: false,
        bloques: [
            {
                id: '',
                cantidadBloque: 3,
                cantidadTurnos: 3,
                cantidadSimultaneos: 3,
                duracionTurno: 15,
                descripcion: '',
                horaInicio: '',
                horaFin: '',
                accesoDirectoDelDia: 4,
                accesoDirectoProgramado: 2,
                reservadoGestion: 3,
                reservadoProfesional: 3,
                cupoMobile: 2,
                restantesDelDia: 3,
                restantesProgramados: 0,
                restantesGestion: 0,
                restantesProfesional: 0,
                restantesMobile: 2,
                pacienteSimultaneos: false,
                citarPorBloque: false,
                turnosMobile: true,
                tipoPrestaciones: [
                    {
                        auditable: true,
                        fsn: "Consulta de medicina general (procedimiento)",
                        semanticTag: "procedimiento",
                        conceptId: "391000013108",
                        term: "Consulta de medicina general",
                        nombre: "Consulta de medicina general",
                        id: "59ee2d9bf00c415246fd3d6a"
                    }
                ],
                turnos: [
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:00:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:04:10.105Z",
                        motivoConsulta: "Dolor abdominal",
                        nota: "Esta es una nota del turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "HPN-48uh38rhnas",
                                    id: "5f77092acbaf2579ee8c9e84"
                                }
                            ],
                            id: "5a4268a9db4ebc1dbdc94ece",
                            documento: "50604147",
                            apellido: "DIAZ OLIVA",
                            nombre: "VICTORIA",
                            fechaNacimiento: "2010-09-01T03:00:00.000Z",
                            sexo: "femenino",
                            telefono: "29951860602",
                            obraSocial: {
                                codigoPuco: 108803,
                                nombre: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA",
                                financiador: "OBRA SOCIAL DEL PERSONAL DEL TURISMO, HOTELERO Y GASTRONOMICO DE LA UNION DE TRABAJADORES DEL TURISMO HOTELEROS Y GASTRONOMICOS DE LA REPUBLICA ARGENTINA"
                            },
                            alias: "",
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:10:26.678Z",
                        id: "5f7708a4cbaf2579ee8c9e27"
                    },

                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T10:30:00.000Z",
                        auditable: true,
                        emitidoPor: "Gestión de pacientes",
                        fechaHoraDacion: "2020-10-02T11:25:13.815Z",
                        motivoConsulta: "Migraña frecuente",
                        nota: "Esta es una nota",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "hpn-38rhbd03fs",
                                    id: "5f770e1930d99d7a226cd1d0"
                                }
                            ],
                            id: "586e6e8627d3107fde116337",
                            documento: "6922003",
                            apellido: "ARANA",
                            nombre: "RUBEN BERNARDO",
                            fechaNacimiento: "1933-02-18T03:00:00.000Z",
                            sexo: "masculino",
                            telefono: "2213842923",
                            obraSocial: {
                                codigoPuco: 108803,
                                nombre: "I.S.S.N",
                                financiador: "Instituto de Seguridad Social de la Provincia del Neuquén",
                            },
                            alias: '',
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "5f7708a4cbaf2579ee8c9e25"
                    },
                    {
                        diagnostico: {
                            codificaciones: [

                            ]
                        },
                        estadoFacturacion: {
                            estado: "Sin comprobante",
                            tipo: "",
                            numeroComprobante: ""
                        },
                        estado: "asignado",
                        horaInicio: "2020-10-02T11:30:00.000Z",
                        auditable: true,
                        emitidoPor: "turno telefonico",
                        fechaHoraDacion: "2020-10-02T11:04:54.662Z",
                        motivoConsulta: "Insomnio",
                        nota: "Otra nota para ver en el turno.",
                        paciente: {

                            carpetaEfectores: [
                                {

                                    organizacion: {

                                        nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                                        id: "57e9670e52df311059bc8964"
                                    },
                                    nroCarpeta: "PDR31359294",
                                    id: "5a33ca1c1524384ea0d36360"
                                }
                            ],
                            id: "5a33c9de1524384ea0d35c1d",
                            documento: "31359294",
                            apellido: "SANTARELLI",
                            nombre: "JULIO NICOLÁS ",
                            fechaNacimiento: "1984-12-06T13:10:00.736Z",
                            sexo: "masculino",
                            telefono: "2995186062",
                            obraSocial: {
                                codigoPuco: 921001,
                                nombre: "O.S.P. NEUQUEN",
                                financiador: "O.S.P. NEUQUEN"
                            },
                            alias: "Julito",
                            foto: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg",
                        },
                        tipoPrestacion: {
                            auditable: true,

                            fsn: "Consulta de medicina general (procedimiento)",
                            semanticTag: "procedimiento",
                            conceptId: "391000013108",
                            term: "Consulta de medicina general",
                            nombre: "Consulta de medicina general",
                            id: "59ee2d9bf00c415246fd3d6a"
                        },
                        tipoTurno: "delDia",
                        motivoSuspension: '',
                        idPrestacionPaciente: "3213213",
                        avisoSuspension: '',
                        reasignado: {
                            anterior: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            },
                            siguiente: {
                                idAgenda: '',
                                idBloque: '',
                                idTurno: '',
                            }
                        },
                        asistencia: "asistio",
                        horaAsistencia: "2020-10-02T11:27:59.682Z",
                        id: "57e9670e52df311059bc8964",
                        //nombre: "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON"
                    }
                ],
            },
        ],
    }
]
