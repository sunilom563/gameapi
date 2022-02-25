import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../../shared/info';
@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    
    filteredCustomers: any[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';

    asajamam:any[] = [];
    
    constructor() {}
    
    ngOnInit() {
        
    }
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }
}