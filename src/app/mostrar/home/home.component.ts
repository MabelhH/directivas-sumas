import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  val1:number=0;
  val2:number=0;
  total:number=0;

operacion(){
 if(this.seleccionada=='1'){
  this.total=this.val1+this.val2;
  this.sumar='green'
 }
 else if(this.seleccionada=='2'){
  this.total=this.val1-this.val2;
  this.restar='purple'
 }
 else if(this.seleccionada=='3'){
  this.total=this.val1*this.val2;
  this.multiplicar='orange'
 }
 else if(this.seleccionada=='4'){
  this.total=this.val1/this.val2;
  this.dividir='violet'
 }
 
                     
  }
  seleccionada:string="inicio";

  sumar:string='';
  restar:string='';
  multiplicar:string='';
  dividir:string='';
  
  


}










  



