import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  contenido$ = new EventEmitter<any>();
  contenido : []
  estatusText$ = new EventEmitter<string>();
  estatusText: string = ''
  
  constructor() { }
}
