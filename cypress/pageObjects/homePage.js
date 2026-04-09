import { BasePage } from './basePage';

export class HomePage extends BasePage {
  static get url() {
    return '/#/';
  }

  static get appointmentButton() {
    return cy.get("#btn-make-appointment");
  }
  
}