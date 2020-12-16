import { Component, OnInit } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icPhoneInTalk from '@iconify/icons-ic/twotone-phone-in-talk';
import icMail from '@iconify/icons-ic/twotone-mail';
import { stagger60ms } from '../../../../p2p/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../p2p/animations/fade-in-up.animation';

@Component({
  selector: 'p2p-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class FaqComponent implements OnInit {

  icSearch = icSearch;
  icPhoneInTalk = icPhoneInTalk;
  icMail = icMail;

  constructor() { }

  ngOnInit() {
  }

}
