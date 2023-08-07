import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/services/apicore/api.service';
import { LoginService } from 'src/app/services/seguridad/login.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  public focus: boolean = true
  public buscar: string = ''
  public lst = []

  public lengthOfi = 0;
  public pageSizeOfi = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public cantidad: number = 0


  public blBuscar: boolean = false
  public antes: boolean = false
  public despues: boolean = true
  public paginador: number = 10
  public de: number = 0
  public para: number = 9
  public max_paginador: number = 0
  public lstPaginas = []
  public actual : number =  1
  public slike : string = '%'

  public previaBusqueda : string = ''

  constructor(
    private apiService: ApiService,
    private modalService: NgbModal,
    public loginService: LoginService,
    private ngxService: NgxUiLoaderService,) { }

  ngOnInit(): void {
  }


  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  Consultar(event) {}

  seleccionNavegacion(e){
}

}
