import { Component } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-styleguide',
  templateUrl: 'styleguide.page.html',
})
export class StyleguidePage {

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  unread(item) {
    console.log(item)
  }
}
