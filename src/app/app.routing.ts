import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { CitasComponent } from './citas/citas.component';


const appRoutes: Routes = [
    {
        path: '', component: HomeComponent,

        children: [
            { path: 'turno', component: CitasComponent }
        ]
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export class AppRoutingModule { }
