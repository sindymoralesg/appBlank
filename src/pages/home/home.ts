import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  usuario: string = "";
  clave: string = "";
  pagina = AboutPage;

  constructor(public alertCtrl: AlertController,
    private navCtrl: NavController,
    private navParams: NavParams) { }

  /*
  constructor(private navCtrl: NavController, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'usuario': ['', Validators.compose([Validators.required])],
      'clave': ['', Validators.compose([Validators.required])]
      });
      
      this.usuario = this.loginForm.controls['usuario'];
      this.clave = this.loginForm.controls['clave'];

  }*/


  validaIngreso() {
    if (this.usuario !== "" && this.clave !== "") {
      //    this.datosInvalidos();
      this.navCtrl.push(this.pagina, {
        'nombre': this.usuario
      });
    } else {
      this.formularioIncompleto();
    }
  }

  formularioIncompleto() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Debe diligenciar todos los datos!',
      buttons: ['OK']
    });
    alert.present();
  }

  datosInvalidos() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Los datos ingresados no son válidos!',
      buttons: ['OK']
    });
    alert.present();
  }

  recuperaClave() {
    let prompt = this.alertCtrl.create({
      //title: 'Login',
      message: "Ingrese su correo electrónico:",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Clic en Cancelar');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.confirmaCorreo(data);
            console.log('Clic en Guardar');
          }
        }
      ]
    });
    prompt.present();
  }

  confirmaCorreo(data) {
    const alert = this.alertCtrl.create({
      title: 'Confirmación!',
      subTitle: 'La nueva clave fue enviada al correo: ' + data.email,
      buttons: ['OK']
    });
    alert.present();
  }
}
