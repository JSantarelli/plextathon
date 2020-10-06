import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlexModule } from '@andes/plex';
import { Plex } from '@andes/plex';
import * as $ from 'jquery';

// Components
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { CitasComponent } from './citas/citas.component';
import { CalendarioComponent } from './citas/calendario/calendario.component';
import { BusquedaPacienteComponent } from './citas/busqueda-paciente/busqueda-paciente.component';
import { DacionTurnoComponent } from './citas/dacion-turno/dacion-turno.component';
import { ConfirmacionTurnoComponent } from './citas/confirmacion-turno/confirmacion-turno.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CitasComponent,
        CalendarioComponent,
        BusquedaPacienteComponent,
        DacionTurnoComponent,
        ConfirmacionTurnoComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        PlexModule,
        routing,
        HttpClientModule
    ],
    providers: [
        Plex,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
