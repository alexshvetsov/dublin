import { Component } from '@angular/core';
import { CsvUploadService } from '../../../../utilities/services/csv-upload.service';
import { CsvUpload } from '../../../../utilities/models/csv-upload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-csv-upload-table',
  standalone: false,
  templateUrl: './csv-upload-table.component.html',
  styleUrl: './csv-upload-table.component.scss',
})
export class CsvUploadTableComponent {
  displayedColumns: string[] = ['nickname', 'prevBalance', 'updatedBalance'];
  dataSource$: Observable<CsvUpload[]> = this.csvUploadService.getCsvUploads();

  constructor(private csvUploadService: CsvUploadService) {}
}
