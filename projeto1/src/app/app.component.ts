import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto1';
  
  controle1 : FormControl;
  controle2: FormControl;
  controle3: FormControl;
  controle4 : FormControl;
  grupo1: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.controle1 = formBuilder.control({value: 'nome', disabled: true});
    this.controle2 = formBuilder.control({value: 'sobrenome', disabled: false});
    this.controle3 = formBuilder.control({value: 'email', disabled: true});
    this.controle4 = formBuilder.control({value:'feedback',disabled:true});
    this.grupo1 = formBuilder.group({
      controller: this.controle1,
      controller2: this.controle2,
      controller3: this.controle3,
      controller4: this.controle4
    });
  }

}
