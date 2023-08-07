import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/seguridad/login.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private loginService: LoginService) { 

  }

  async ngOnInit() {

    
    
    if (ROUTES.length == 0){
      await this.loginService.Iniciar()
      var App = this.loginService.Aplicacion
      
      App.Rol.Menu.forEach(e => {
        ROUTES.push({
          path : e.url,
          title: e.nombre,
          icon : e.icono,
          class : e.clase
        })
      });
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);    
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}