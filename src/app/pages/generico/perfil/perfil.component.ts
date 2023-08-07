import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/seguridad/login.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {

  public nombre: string = 'Analista'
  public nombrecompleto: string = ''
  public analista: string = ''
  public cedula: string = ''
  public telefono: string = ''
  public correo: string = ''
  public perfil: string = ''
  animal: string;
  name: string;

  @ViewChild('cambiarClave', { static: true }) cambiarClave: TemplateRef<any>;
  // email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private loginService: LoginService,
    public dialog: MatDialog,
    private modalService: NgbModal) {


  }
  openDialog(): void {
    const dialogRef = this.dialog.open(this.cambiarClave, {
      width: '500px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

 


  ngOnInit(): void {

    console.log(this.loginService.Usuario)

    this.nombrecompleto = this.loginService.Usuario.nombre
    this.nombre = this.loginService.Usuario.usuario
    this.perfil = this.loginService.Usuario.Perfil.descripcion
    this.correo = this.loginService.Usuario.correo
    this.cedula = this.loginService.Usuario.cedula


  }




  open(content) {
    this.modalService.open(content, { size: 'lg' });

  }



  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'Debe instroducir correo';
  //   }

  //   return this.email.hasError('email') ? 'Correo no validado' : '';
  // }

}


