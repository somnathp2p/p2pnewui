import { ChangeDetectionStrategy, ChangeDetectorRef, Component, AfterViewInit, Input, OnInit, ViewChild } from '@angular/core';
import icDescription from '@iconify/icons-ic/twotone-description';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { stagger80ms } from '../../../../p2p/animations/stagger.animation';
import { scaleIn400ms } from '../../../../p2p/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../p2p/animations/fade-in-right.animation';
import icVerticalSplit from '@iconify/icons-ic/twotone-vertical-split';
import icVisiblity from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icMenu from '@iconify/icons-ic/twotone-menu';
import icCamera from '@iconify/icons-ic/twotone-camera';
import icPhone from '@iconify/icons-ic/twotone-phone';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { stagger60ms } from '../../../../p2p/animations/stagger.animation';

import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Customer } from './interfaces/customer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../p2p/interfaces/table-column.interface';
import { aioTableData3, aioTableLabels } from '../../../../static-data/aio-table-data';
import { CustomerCreateUpdateComponent } from './customer-create-update/customer-create-update.component';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../../p2p/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../p2p/animations/stagger.animation';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';

import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import { Router } from "@angular/router";


@Component({
  selector: 'p2p-add-new-quiz',
  templateUrl: './add-new-quiz.component.html',
  styleUrls: ['./add-new-quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms,
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
export class AddNewQuizComponent implements OnInit {

    
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
{ label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
{ label: 'Question', property: 'question', type: 'text', visible: true, cssClasses: ['font-medium'] },
{ label: 'Answer', property: 'image', type: 'image', visible: true },
{ label: 'Marks', property: 'marks', type: 'text', visible: true },
];
pageSize = 10;
pageSizeOptions: number[] = [10, 20, 30, 50];
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



  accountFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  confirmFormGroup: FormGroup;

  verticalTypeFormGroup: FormGroup;
  verticalAccountFormGroup: FormGroup;
  verticalPasswordFormGroup: FormGroup;
  verticalConfirmFormGroup: FormGroup;

  phonePrefixOptions = ['Please select','Test Data'];

  passwordInputType = 'password';

  icDoneAll = icDoneAll;
  icDescription = icDescription;
  icVerticalSplit = icVerticalSplit;
  icVisibility = icVisiblity;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    /**
     * Horizontal Stepper
     * @type {FormGroup}
     */
    this.accountFormGroup = this.fb.group({
      username: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
      phonePrefix: [this.phonePrefixOptions[3]],
      phone: [],
    });

    this.passwordFormGroup = this.fb.group({
      password: [
        null,
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(6)
          ]
        )
      ],
      passwordConfirm: [null, Validators.required]
    });

    this.confirmFormGroup = this.fb.group({
      terms: [null, Validators.requiredTrue]
    });

    /**
     * Vertical Stepper
     * @type {FormGroup}
     */
    this.verticalTypeFormGroup = this.fb.group({
      Qtype: [null, Validators.required]
    });

    this.verticalAccountFormGroup = this.fb.group({
      standerd: [null, Validators.required],
      subject: [null, Validators.required],
      topic: [null, Validators.required],
      subtopic: [this.phonePrefixOptions[3]],
      category: [null, Validators.required],
      level: [null, Validators.required],
      desc: [],
      noOfQ: [null, Validators.required],

    });

    this.verticalPasswordFormGroup = this.fb.group({
      password: [
        null,
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(6)
          ]
        )
      ],
      passwordConfirm: [null, Validators.required]
    });

    this.verticalConfirmFormGroup = this.fb.group({
      terms: [null, Validators.requiredTrue]
    });
     

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

  showPassword() {
    this.passwordInputType = 'text';
    this.cd.markForCheck();
  }

  hidePassword() {
    this.passwordInputType = 'password';
    this.cd.markForCheck();
  }

  submit() {
    this.snackbar.open('Hooray! You successfully created your account.', null, {
      duration: 5000
    });
  }

  /*-----------------*/




get visibleColumns() {
return this.columns.filter(column => column.visible).map(column => column.property);
}

/**
 * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
 * We are simulating this request here.
 */
getData() {
return of(aioTableData3.map(customer => new Customer(customer)));
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
    var myurl = '/manage-quiz/schedule-quiz/1';
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
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
this.subject$.next(this.customers);
}

}
