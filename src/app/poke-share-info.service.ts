import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  public stringVar = new Subject<string>();

  getObservable(){
    return this.stringVar;
  } 
  
  public setValue(newStringVar:string){
    this.stringVar.next(newStringVar);
  }

}