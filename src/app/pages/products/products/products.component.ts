import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'products-cmp',
    templateUrl: 'products.component.html'
})

export class ProductsComponent {

    constructor(private router: Router) {

    }
}
