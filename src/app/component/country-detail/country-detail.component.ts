import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service';

@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html',
    styleUrls:['./country-detail.component.css']
})

export class CountryDetailComponent implements OnInit {
    list:any;
    id: any;
    totalList: any;
    isLoading = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: BackendApiService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.getDetail();
    }

    getDetail() {
        this.isLoading = true;
        this.service.getDetail(this.id).subscribe(data => {    
            this.isLoading = false;
            this.list = data;
            this.totalList = this.list.slice(-1).pop();
        });
    }


    onBack(): void {
        this.router.navigate(['']);
    }
}