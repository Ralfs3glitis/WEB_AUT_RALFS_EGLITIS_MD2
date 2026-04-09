import { BasePage } from './basePage';

export class AppointmentPage extends BasePage {
  static get url() {
    return '/#appointment';
  }
  // 1. Facility
  static get facilityCombo() {
    return cy.get("#combo_facility");
  }
  // 2. Check - Apply for hospital readmission
  static get applyCheckbox() {
    return cy.get('#chk_hospotal_readmission');
  }
  // 3. Select - Medicaid
  static get medicaidRadioButton() {
    return cy.get("#radio_program_medicaid");
  }
  // 4. Set Date value by using the widget - 30
  static get dateInputField() {
    return cy.get("#txt_visit_date");
  }
  static get dateWidgetDays() {
    return cy.get('.datepicker-days .day');
  }
  // 5. Set comment - CURA Healthcare Service
  static get commentField() {
    return cy.get("#txt_comment");
  }
  // 6. Click - Book Appointment
  static get bookButton() {
    return cy.get("#btn-book-appointment");
  }
  // vi. Validate that previously set values are correct
  static get confirmationFacility() { 
    return cy.get('#facility'); 
  }
  static get confirmationReadmission() { 
    return cy.get('#hospital_readmission'); 
  }
  static get confirmationProgram() { 
    return cy.get('#program'); 
  }
  static get confirmationVisitDate() { 
    return cy.get('#visit_date'); 
  }
  static get confirmationComment() { 
    return cy.get('#comment'); 
  }


  static get hamburgerMenu() { 
    return cy.get('#menu-toggle'); 
  }
  static get sidebar() { 
    return cy.get('#sidebar-wrapper'); 
  }
  static get historyButton() { 
    return cy.get('[href="history.php#history"]'); 
  }
  

}