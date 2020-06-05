import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html'
})

export class CountryDetailComponent implements OnInit {
    list:any;
    id: any;
    totalList: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: BackendApiService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.getDetail();
    }

    getDetail() {
        this.service.getDetail(this.id).subscribe(data => {
            this.list = data;
            this.totalList = this.list.slice(-1).pop();
        })
    }


    onBack(): void {
        this.router.navigate(['']);
    }
}