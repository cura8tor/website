import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hideHeader:boolean = false;

  constructor (private router:Router) {
    this.router.events
    .subscribe((evt) =>{
      if(evt instanceof NavigationEnd){
        const {url} = this.router
        const splitUrl = url.split('/')
        if(splitUrl[1] === 'view'){
          this.hideHeader = true
        }else{
          this.hideHeader = false
        }
      }
    })
  }
}
