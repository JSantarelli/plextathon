import { Component, OnInit } from '@angular/core';
import { MedsService } from '../servicios/meds.service';

@Component({
    selector: 'app-andes-meds',
    templateUrl: './andes-meds.component.html',
    styleUrls: ['./andes-meds.component.scss']
})
export class AndesMedsComponent implements OnInit {

    medicamentos: any[] = [];

    constructor(private medService: MedsService) {

        this.medicamentos = medService.getMedicamentos();
    }

    ngOnInit() {
    }



}
