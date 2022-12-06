import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private Observer: BreakpointObserver) {}

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.Observer.observe(["(max-width: 787px)"])
    .subscribe((res) =>{
      if(res?.matches){
        this.sideNav.mode = "over";
        this.sideNav.close;
      } else {
        this.sideNav.mode = "side";
        this.sideNav.open();
      }
    })
   
  }

}
