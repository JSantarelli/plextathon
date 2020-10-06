import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { CitasComponent } from './citas/citas.component';
import { DacionTurnoComponent } from './citas/dacion-turno/dacion-turno.component';
import { BusquedaPacienteComponent } from './citas/busqueda-paciente/busqueda-paciente.component';
import { ConfirmacionTurnoComponent } from './citas/confirmacion-turno/confirmacion-turno.component';


const appRoutes: Routes = [
    {
        path: '', component: CitasComponent,

        children: [
            { path: 'busqueda-paciente', component: BusquedaPacienteComponent },
            { path: 'dacion-turno', component: DacionTurnoComponent },
            { path: 'confirmacion-turno', component: ConfirmacionTurnoComponent },
            { path: 'home', component: HomeComponent },
            { path: 'dacion-turno/:id', component: DacionTurnoComponent }
        ]
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export class AppRoutingModule { }
