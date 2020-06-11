import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'edit-company-cmp',
    templateUrl: './edit-company.component.html'
})

export class EditCompanyComponent {

    constructor(private formBuilder: FormBuilder) {
        
    }

    ngOnInit() {
        this.CreateForm();
        this.PutDataIntoForm();
    }

    form:any;
    CreateForm() {
        this.form = this.formBuilder.group({
            'company_name': ['', ],
            'total_products': ['', ],
        })
    }

    PutDataIntoForm() {
        this.form.reset();
        this.form.patchValue({
            company_name: 'New Company',
            total_products: '5',
        })
    }

    SubmitData() {
        console.log(this.form.value);
    }
}
