import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-settle-up',
  templateUrl: './settle-up.component.html',
  styleUrls: ['./settle-up.component.scss'],
})
export class SettleUpComponent {
  showPayouts = false;
  payouts: any[] = [];

  constructor(private expenseService: ExpenseService) {}

  /**
   * Settles up the expenses and calculates the payouts.
   * If successful, sets the payouts and shows them.
   * If there is an error, logs the error to the console.
   */
  settleUp(): void {
    this.expenseService.calculatePayouts()
      .then((payouts) => {
        this.payouts = payouts;
        this.showPayouts = true;
      })
      .catch((error) => {
        console.error('Error calculating payouts:', error);
      });
  }
}

