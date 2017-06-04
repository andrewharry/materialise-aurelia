import { MdToastService } from 'aurelia-materialize-bridge';

export class App {
  message = 'Hello World!';

  static inject = [MdToastService];

  constructor(private toast: MdToastService) { }

  showToast() {
    this.toast.show('You clicked me!', 2000);
  }
}
