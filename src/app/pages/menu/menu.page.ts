import { Route} from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'First Page with Tabs',
    url: '/menu/first-with-tabs'
  },
  {
    title: 'First Page with blank',
    url: '/menu/second'
    }
  ]
  
  selectedPath = ''

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url){
        this.selectedPath = event.url;
      }
    })
   }

  ngOnInit() {
  }

}
