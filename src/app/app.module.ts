import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlexModule } from '@andes/plex';
import { Plex } from '@andes/plex';

// Components
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { AndesRunComponent } from './andes-run/andes-run.component';
import { AndesMedsComponent } from './andes-meds/andes-meds.component';
import { AndesTriageComponent } from './andes-triage/andes-triage.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AndesRunComponent,
        AndesMedsComponent,
        AndesTriageComponent
    ],
    imports: [
        BrowserModule,
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
