import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../p2p/interfaces/link.interface';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import { scaleIn400ms } from '../../../../p2p/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../p2p/animations/fade-in-right.animation';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import { MatDialog } from '@angular/material/dialog';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { Contact } from './interfaces/contact.interface';
import { contactsData } from '../../../../static-data/contacts';
import { trackById } from '../../../../p2p/utils/track-by';
import icSearch from '@iconify/icons-ic/twotone-search';
import { stagger40ms } from '../../../../p2p/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../p2p/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from '../../../../p2p/animations/scale-fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'p2p-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class ContactsGridComponent implements OnInit {

  contacts = contactsData;
  filteredContacts$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('activeCategory')),
    map(activeCategory => {
      switch (activeCategory) {
        case 'all': {
          return contactsData;
        }

        // case 'starred': {
        //   return contactsData.filter(c => c.starred);
        // }

        default: {
        //  return [];
        return contactsData;
        }
      }
    })
  );

  links: Link[] = [
    {
      label: 'ALL STUDENTS',
      route: '../all'
    },
    {
      label: 'RECENTLY ATTEMED STUDENTS',
      route: '../recently-attemted'
    },
    {
      label: 'ONLINE STUDENTS',
      route: '../online'
    }
  ];

  icSearch = icSearch;
  icPersonAdd = icPersonAdd;
  icCloudDownload = icCloudDownload;
  icFilterList = icFilterList;
  icContacts = icContacts;


  trackById = trackById;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit() {}



  toggleStar(id: Contact['id']) {
    const contact = contactsData.find(c => c.id === id);

    if (contact) {
      contact.starred = !contact.starred;
    }
  }
}
