import { Component } from '@angular/core';
declare var require: any
  const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  downloadPdf() {
    let link = document.createElement("a");
    link.download = "Cv";
    link.href = "assets/files/Resume_2024.pdf";
    link.click();
  }
}
