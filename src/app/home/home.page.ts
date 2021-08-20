import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router , private navControl: NavController) {}
  
  irPagina2(){
    this.router.navigate(['/pagina2']);
  }
  irPagina3(){
    this.navControl.navigateForward(['/pagina3']);
  }
}
