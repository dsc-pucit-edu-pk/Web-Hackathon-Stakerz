import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('toolbarAnimation', [
      state('transparent', style({ opacity: 0 })),
      state('solid', style({ opacity: 1 })),
      transition('transparent <=> solid', animate('300ms')),
    ]),
  ],

})
export class HomeComponent implements OnInit {



transparent = true;
toolbarState = 'transparent';

ngOnInit() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.transparent = scrollTop < 200; // Change the threshold as needed
    this.toolbarState = this.transparent ? 'transparent' : 'solid';
  });
}



}
