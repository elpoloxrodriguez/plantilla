import { Injectable } from '@angular/core';

export interface Maestro {
  id?: string;
  nombre?: string;
  codigo?: string;
  usuario?: string;
  fecha?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor() { }
}
