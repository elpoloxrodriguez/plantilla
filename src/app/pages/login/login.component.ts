import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IToken, LoginService } from '../../services/seguridad/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  


  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  usuario : string;
  clave: string;

  submitted: boolean;
  rememberMe: boolean;

  loading = false;
  isHidden: boolean = true;
  public iToken: IToken = {
    token: '',
  };

  public itk: IToken;
  private index: number = 0;

  constructor(private router: Router, 
    private loginService: LoginService, 
    private toastrService: ToastrService,
    private ngxService: NgxUiLoaderService){
    if (sessionStorage.getItem("token") != undefined ){
      this.router.navigate(['/principal']);
    }
  }

  ngOnInit() {

  }


  async login(){
    this.ngxService.startLoader("loader-login");
    
    await this.loginService.getLogin(this.usuario, this.clave).subscribe(
      (data) => { // Success
        this.itk = data;
        sessionStorage.setItem("token", this.itk.token );
        this.ngxService.stopLoader("loader-login");
        this.router.navigate(['/principal']);

      },
      (error) => {
        this.usuario = ''
        this.clave = ''
        this.ngxService.stopLoader("loader-login");

        this.toastrService.error(
          'Error al acceder a los datos de conexion',
          `Bus Empresarial`
        );
      }
    );
  }

}
