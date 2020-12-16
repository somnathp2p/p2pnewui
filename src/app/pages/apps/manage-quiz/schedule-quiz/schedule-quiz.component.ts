import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Customer } from './interfaces/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../../p2p/interfaces/table-column.interface';
import { aioTableData2, aioTableLabels } from '../../../../../static-data/aio-table-data';
import { CustomerCreateUpdateComponent } from './customer-create-update/customer-create-update.component';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../../../p2p/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../p2p/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';


@UntilDestroy()
@Component({
selector: 'p2p-schedule-quiz',
templateUrl: './schedule-quiz.component.html',
styleUrls: ['./schedule-quiz.component.scss'],
animations: [
fadeInUp400ms,
stagger40ms
],
providers: [
{
provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
useValue: {
appearance: 'standard'
} as MatFormFieldDefaultOptions
}
]
})
export class ScheduleQuizComponent implements OnInit, AfterViewInit {

layoutCtrl = new FormControl('boxed');

/**
 * Simulating a service with HTTP that returns Observables
 * You probably want to remove this and do all requests in a service with HTTP
 */
subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
data$: Observable<Customer[]> = this.subject$.asObservable();
customers: Customer[];

@Input()
columns: TableColumn<Customer>[] = [

{ label: 'Date', property: 'date', type: 'text', visible: true },
{ label: 'Description', property: 'desc', type: 'text', visible: true, cssClasses: ['font-medium'] },
{ label: 'Start', property: 'start', type: 'text', visible: true },
{ label: 'End', property: 'end', type: 'text', visible: true },
{ label: 'Assigned', property: 'assigned', type: 'text', visible: true },
{ label: 'Attemped', property: 'attemped', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
{ label: 'Duration', property: 'duration', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
{ label: 'Trackable', property: 'track', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
{ label: 'Labels', property: 'labels', type: 'button', visible: true }
];
pageSize = 10;
pageSizeOptions: number[] = [5, 10, 20, 50];
dataSource: MatTableDataSource<Customer> | null;
selection = new SelectionModel<Customer>(true, []);
searchCtrl = new FormControl();

labels = aioTableLabels;

icPhone = icPhone;
icMail = icMail;
icMap = icMap;
icEdit = icEdit;
icSearch = icSearch;
icDelete = icDelete;
icAdd = icAdd;
icFilterList = icFilterList;
icMoreHoriz = icMoreHoriz;
icFolder = icFolder;

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, { static: true }) sort: MatSort;

constructor(private dialog: MatDialog) {
}

get visibleColumns() {
return this.columns.filter(column => column.visible).map(column => column.property);
}

/**
 * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
 * We are simulating this request here.
 */
getData() {
return of(aioTableData2.map(customer => new Customer(customer)));
}

ngOnInit() {
this.getData().subscribe(customers => {
this.subject$.next(customers);
});

this.dataSource = new MatTableDataSource();

this.data$.pipe(
filter<Customer[]>(Boolean)
).subscribe(customers => {
this.customers = customers;
this.dataSource.data = customers;
});

this.searchCtrl.valueChanges.pipe(
untilDestroyed(this)
).subscribe(value => this.onFilterChange(value));
}

ngAfterViewInit() {
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
}

createCustomer() {
this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((customer: Customer) => {
/**
 * Customer is the updated customer (if the user pressed Save - otherwise it's null)
 */
if (customer) {
/**
 * Here we are updating our local array.
 * You would probably make an HTTP request here.
 */
this.customers.unshift(new Customer(customer));
this.subject$.next(this.customers);
}
});
}

updateCustomer(customer: Customer) {
this.dialog.open(CustomerCreateUpdateComponent, {
data: customer
}).afterClosed().subscribe(updatedCustomer => {
/**
 * Customer is the updated customer (if the user pressed Save - otherwise it's null)
 */
if (updatedCustomer) {
/**
 * Here we are updating our local array.
 * You would probably make an HTTP request here.
 */
const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
this.customers[index] = new Customer(updatedCustomer);
this.subject$.next(this.customers);
}
});
}

deleteCustomer(customer: Customer) {
/**
 * Here we are updating our local array.
 * You would probably make an HTTP request here.
 */
this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
this.selection.deselect(customer);
this.subject$.next(this.customers);
}

deleteCustomers(customers: Customer[]) {
/**
 * Here we are updating our local array.
 * You would probably make an HTTP request here.
 */
customers.forEach(c => this.deleteCustomer(c));
}

onFilterChange(value: string) {
if (!this.dataSource) {
return;
}
value = value.trim();
value = value.toLowerCase();
this.dataSource.filter = value;
}

toggleColumnVisibility(column, event) {
event.stopPropagation();
event.stopImmediatePropagation();
column.visible = !column.visible;
}

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
const numSelected = this.selection.selected.length;
const numRows = this.dataSource.data.length;
return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
this.isAllSelected() ?
this.selection.clear() :
this.dataSource.data.forEach(row => this.selection.select(row));
}

trackByProperty<T>(index: number, column: TableColumn<T>) {
return column.property;
}

onLabelChange(change: MatSelectChange, row: Customer) {
const index = this.customers.findIndex(c => c === row);
this.customers[index].labels = change.value;
this.subject$.next(this.customers);
}
}
