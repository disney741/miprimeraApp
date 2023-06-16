import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="juan";

  apellido="Diaz";

  edad=19;

  empresa="pildoras informaticas";

  //empresa="pildoras informaticas";

  //llamaEmpresa(value:string){

 // }

 habilitacionCuadro=false;

 usuRegistrado=false;

 textoDeRegistro="no hay nadie registrado"

 getRegistroUsuario(){
  this.usuRegistrado=false;

 }

 setusuarioRegistrado(event:Event){

  //this.textoDeRegistro="El usuario se acasba de registrar";

  if((<HTMLInputElement>event.target).value=="si"){

    this.textoDeRegistro="El usuario se acasba de registrar";

  }else{
    this.textoDeRegistro="no hay nadie registrado";

  }
 
 }

  constructor() {}

  ngOnInit(): void {
    
  }



}
