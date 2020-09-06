import { Component } from '@angular/core';
import { TriageService } from './servicios/triage.service';
import { Triage } from './modelos/triage';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'plextathon';

    constructor(private service: TriageService) {

    }
}

