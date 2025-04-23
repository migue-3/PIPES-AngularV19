import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Miguel',
  gender: 'male',
  age: 29,
  address: 'Buenos aires, Argentina',
};

const client2 = {
  name: 'Anna',
  gender: 'female',
  age: 26,
  address: 'Genzzano, italy',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18nselect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() == client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  //i18nplural
  clientsMap = signal({
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos dos clientes esperando',
    other: 'Tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Jose',
    'Laura',
    'Luis',
    'Miguel',
    'Hector',
    'Camila',
    'Alberto',
    'Cristina',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // KeyValuePipe
  profile = {
    name: 'Miguel',
    age: 29,
    address: 'Buenos aires Argentina',
  };

  // AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Tenemos un error en la respuesta de la data');
      // resolve('tenemos data en la promise');
      console.log('promise finished!!');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );
}
