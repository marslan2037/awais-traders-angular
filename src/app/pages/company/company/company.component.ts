import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'company-cmp',
    templateUrl: 'company.component.html'
})

export class CompanyComponent {

    constructor(private router: Router) {

    }

    AddCompany() {
        this.router.navigate(['/company/add']);
    }

    EditCompany() {
        this.router.navigate(['/company/edit']);
    }
}
