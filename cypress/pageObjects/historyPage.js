import { BasePage } from './basePage';

export class HistoryPage extends BasePage {
  static get url() {
    return '/#appointment';
  }
  // 1. Facility
  static get body() {
    return cy.get('#history');
  }

}