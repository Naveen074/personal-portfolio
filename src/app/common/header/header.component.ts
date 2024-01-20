import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  switchTheme = new FormControl(false);
  @HostBinding('class') className = ''
  darkClass = 'theme-dark'
  lightClass = 'theme-light'

  constructor(private overlay:OverlayContainer){}

  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((currentMode) => {
      this.className = currentMode ? this.darkClass : this.lightClass

      if(currentMode){
        this.overlay.getContainerElement().classList.add(this.darkClass);
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClass)
      }
    })
  }

}
