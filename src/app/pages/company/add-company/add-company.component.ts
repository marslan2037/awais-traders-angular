import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'add-company-cmp',
    templateUrl: 'add-company.component.html'
})

export class AddCompanyComponent {

    constructor(private formBuilder: FormBuilder) {
        
    }

    ngOnInit() {
        this.CreateForm();
    }

    form:any;
    CreateForm() {
        this.form = this.formBuilder.group({
            'company_name': ['', ],
            'total_products': ['', ],
        })
    }

    SubmitData() {
        console.log(this.form.value);
    }
}
