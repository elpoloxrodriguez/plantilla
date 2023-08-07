import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.scss']
})
export class ConfigurarComponent implements OnInit {

  public producto : string = "0"

  public xAPI : IAPICore = {
    funcion : '',
    parametros : ''
  }

  @ViewChild('hechicero', { static: true }) hechicero: TemplateRef<any>;

  public lstMaestro : any



  constructor(public dialog: MatDialog, private apiService : ApiService) { }

  ngOnInit(): void {
    this.xAPI.funcion = "CCEC_CMaestro"
    this.xAPI.parametros = "%"
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        this.lstMaestro = data.Cuerpo
      },
      (err) => {
        console.error(err)
      }
    )

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.hechicero, {
      width: '850px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  seleccionNavegacion(e){
    
  }
}
