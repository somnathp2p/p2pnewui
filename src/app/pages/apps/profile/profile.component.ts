import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../../p2p/animations/fade-in-up.animation';
import { fadeInRight400ms } from '../../../../p2p/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../p2p/animations/scale-in.animation';
import { stagger40ms } from '../../../../p2p/animations/stagger.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icAdd from '@iconify/icons-ic/twotone-add';
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';

@Component({
  selector: 'p2p-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})
export class ProfileComponent implements OnInit {

  


  icWork = icWork;
  icPhone = icPhone;
  icPersonAdd = icPersonAdd;
  icCheck = icCheck;
  icMail = icMail;
  icAccessTime = icAccessTime;
  icAdd = icAdd;
  icWhatshot = icWhatshot;

  constructor() { }

  ngOnInit(): void {
  }







}
