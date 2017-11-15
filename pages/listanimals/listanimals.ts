import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
/**
 * Generated class for the ListanimalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listanimals',
  templateUrl: 'listanimals.html',
})
export class ListanimalsPage {

  // nomVariable : typage = "tchouktchouk"
  titre: string = "liste des animaux et drag and drop pour modifier l'ordre";
  //tableau d'objet au format json
  animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  // on autorise le drag and drop dans la liste
  showReorder = true;

  // constructeur de la page avec en plus les parametres et la boite de dialogue alertControlleur et toast
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  // déclaration de la variable média en dehors de la fonction permet de mettre en pause le son courant
  media = null;
  //fonction play avec en paramètre la position (index dans la liste = index dans le tableau d'objet animals)
  play(pos) {
    //Récupération de l'animal
    let animal = this.animals[pos];

    //Pause du son encours
    if (this.media && this.media.currentTime != this.media.duration) {
      this.media.pause();
    }


    //Lecture d'un son
    this.media = new Audio();
    this.media.src = "assets" + animal.file;
    this.media.load();
    this.media.play();
  }

  //methode delete de la liste avec l'objet animal du tableau d'animals
  /*   delete(animal) {
      for (var i = 0; i < this.animals.length; i++) {
        if (this.animals[i] == animal) {
          this.animals.splice(i, 1);
        }
      }
    } */

  delete(animalFromPosition) {

    var animal = this.animals[animalFromPosition];
    // création de toast de validation avec les attribut message, duration et placement (position top bottom middle)
    var toastOk = this.toastCtrl.create({
      message: "suppression de l'élement " + animal.title + " effectuée",
      duration: 2000,
      position: "center"
    });
    // toast pour l'annulation
    var toastAnnuler = this.toastCtrl.create({
      message: "suppression de l'élement " + animal.title + " annulée",
      duration: 2000,
      position: "middle"
    });


    //création d'une boite de dialogue pour la confirmation
    // on utilise la methode create sur le alerteController
    var BoiteDeDaliogueConfirmation = this.alertCtrl.create(
      // à cette methode on definit des attribut, titre/message/sous-titre
      {
        title: "Confirmation",
        message: "Voulez-vous vraiment supprimer l'élement " + animal.title + " ?",
        subTitle: "Lisez ceci avant de cliquer!",
        //tableau des boutons à afficher lors de l'apparition de la boite
        buttons: [
          //bouton annuler
          {
            // text, role (ici annuler), handler lance une fonction anonyme 
            text: "Annuler", role: "cancel", handler: () => {
              toastAnnuler.present();
            }
          },
          //bouton annuler
          {
            //attribut text, fonction anonyme handler avec des instructions
            text: "valider", handler: () => {
              // suppression avec splice de l'item splice(index de l'item, le nombre d'item à supprimer)
              this.animals.splice(animalFromPosition, 1);
              // on lance le toastOK avec present()
              toastOk.present();
              //Pause du son encours une fois supprimer
              if (this.media && this.media.currentTime != this.media.duration) {
                this.media.pause();
              }
            }/// fin fonction handler
          }/// fin button valider
        ]///fin button
      }
    );

    //lance la boite de dialogue créée juste au dessus ( donc lors de l'appel de l'option trash( supprimer))
    BoiteDeDaliogueConfirmation.present();

     // suppression avec splice de l'item splice(index de l'item, le nombre d'item à supprimer)
    // this.animals.splice(animalFromPosition, 1);// utiliser dans la boite de dialogue
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListanimalsPage');
  }

}
