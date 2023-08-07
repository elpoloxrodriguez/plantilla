import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Maestro } from 'src/app/services/util/tabla.service';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
 
  public xAPI : IAPICore = {
    funcion : '',
    parametros : ''
  }


  public ELEMENT_DATA: Maestro[] = [];
  

  displayedColumns: string[] = ['codigo', 'nombre', 'fecha'];
  dataSource : any

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //@Input ('columnas') displayedColumns: string[];

  @Input () API: any // = ['codigo', 'nombre', 'descripcion'];

  constructor(private apiService : ApiService) {
    
   }


  async ngOnChanges(){
    console.log('Entrando a la conexion ', this.API)
    if (this.API != "0" ) {
      await this.cargarContenido()
    }

    
  //  this.ELEMENT_DATA.push( {codigo: '03', nombre: 'PUNTO DE VENTA',  usuario: 'PUNTO DE VENTA'})
  //  console.info(this.ELEMENT_DATA)

  }


  ngAfterViewInit() {
    
    
    
  }


  

  ngOnInit(): void {
  }

  cargarContenido() : any{
    
    this.ELEMENT_DATA = []
    this.xAPI.funcion = "CCEC_CContenido"
    this.xAPI.parametros = this.API
    this.apiService.Ejecutar(this.xAPI).subscribe(
      (data) => {
        
        this.ELEMENT_DATA = data.Cuerpo
        this.dataSource = new MatTableDataSource<Maestro>(this.ELEMENT_DATA)
        this.dataSource.paginator = this.paginator
      },
      (err) => {
        console.error(err)
      }
    )
  }

}
