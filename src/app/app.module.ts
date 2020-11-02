import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlexModule } from '@andes/plex';
import { Plex } from '@andes/plex';
import * as $ from 'jquery';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from "./environment";

// Pipe & Servicios
import { PacientePipe } from './pipes/pacientes.pipe'

// Components
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { CitasComponent } from './citas/citas.component';
import { CalendarioComponent } from './citas/calendario/calendario.component';
import { BusquedaPacienteComponent } from './citas/busqueda-paciente/busqueda-paciente.component';
import { DacionTurnoComponent } from './citas/dacion-turno/dacion-turno.component';
import { ConfirmacionTurnoComponent } from './citas/confirmacion-turno/confirmacion-turno.component';
import { ListadoTurnosComponent } from './citas/listado-turnos/listado-turnos.component';
import { TurnoService } from './servicios/turno.service';
import { SeleccionHorarioComponent } from './citas/seleccion-horario/seleccion-horario.component'
import { SeleccionBloqueComponent } from './citas/seleccion-bloque/seleccion-bloque.component'
import { Router } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CitasComponent,
        CalendarioComponent,
        BusquedaPacienteComponent,
        DacionTurnoComponent,
        ConfirmacionTurnoComponent,
        ListadoTurnosComponent,
        SeleccionHorarioComponent,
        SeleccionBloqueComponent,
        PacientePipe
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        PlexModule,
        routing,
        HttpClientModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        ReactiveFormsModule,
    ],
    providers: [
        Plex,
        appRoutingProviders,
        TurnoService,
        FormGroupDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        // Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
