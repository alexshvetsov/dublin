import { Component } from '@angular/core';
import { BankViewService } from '../../utilities/services/bank-view.service';
import { BankView } from '../../utilities/models/bank-view';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank-view',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './bank-view.component.html',
  styleUrl: './bank-view.component.scss',
})
export class BankViewComponent {
  displayedColumns: string[] = [
    'cashGameTotalRake',
    'cashGameTotalAgentRake',
    'totalAdminRake',
    'totalTournamentRevenue',
    'expenses',
  ];

  dataSource$: Observable<BankView[]> = this.bankViewService.getBankViewData();

  constructor(private bankViewService: BankViewService) {}

  ngOnInit(): void {}
}
