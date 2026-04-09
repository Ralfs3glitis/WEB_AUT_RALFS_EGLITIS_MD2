import { HomePage } from '../pageObjects/homePage';
import { LoginPage } from '../pageObjects/loginPage';
import { AppointmentPage } from '../pageObjects/appointmentPage';
import { HistoryPage } from '../pageObjects/historyPage';

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe('test-site scenarios', () => {
    context('auto login', () => {
      beforeEach(() => {
        HomePage.visit()
        HomePage.appointmentButton.click()
        LoginPage.usernameInputField.type("John Doe")
        LoginPage.passwordInputField.type("ThisIsNotAPassword")
        LoginPage.loginButton.click()
      });

      it('Make an Appointment', () => {
        const facility = "Seoul CURA Healthcare Center";
        const comment = "CURA Healthcare Service";
        // 1. Facility - Seoul CURA Healthcare Center
        AppointmentPage.facilityCombo.select(facility);
        // 2. Check - Apply for hospital readmission
        AppointmentPage.applyCheckbox.click()
        // 3. Select - Medicaid
        AppointmentPage.medicaidRadioButton.click()
        // 4. Set Date value by using the widget - 30
        AppointmentPage.dateInputField.click()
        AppointmentPage.dateWidgetDays.contains('30').click()
        // 5. Set comment - CURA Healthcare Service
        cy.get('body').click(0,0); // click just to close the date widget
        AppointmentPage.commentField.type(comment)
        // 6. Click - Book Appointment
        AppointmentPage.bookButton.click()
        // vi. Validate that previously set values are correct
        AppointmentPage.confirmationFacility.should('have.text', facility);
        AppointmentPage.confirmationReadmission.should('have.text', 'Yes');
        AppointmentPage.confirmationProgram.should('have.text', 'Medicaid');
        AppointmentPage.confirmationVisitDate.should('contain', '30'); 
        AppointmentPage.confirmationComment.should('have.text', comment);
      });

      it('Appointment history empty', () => {
        // v. Click - Menu/Stack/Burger icon
        AppointmentPage.hamburgerMenu.click()
        // vi. Validate that the sidebar is active
        AppointmentPage.sidebar.should('have.class', 'active')
        // vii. Click - History
        AppointmentPage.historyButton.click()
        // viii. Validate that - No appointment - is visible
        HistoryPage.body.should('contain', 'No appointment.')
      });
    });
});