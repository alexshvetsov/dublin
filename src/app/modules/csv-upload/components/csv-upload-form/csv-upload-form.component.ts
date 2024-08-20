import { Component } from '@angular/core';
import { CsvUploadService } from '../../../../utilities/services/csv-upload.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-csv-upload-form',
  standalone: false,
  templateUrl: './csv-upload-form.component.html',
  styleUrl: './csv-upload-form.component.scss',
})
export class CsvUploadFormComponent {
  csvForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private csvService: CsvUploadService) {
    this.csvForm = this.fb.group({
      file: [null],
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type === 'text/csv') {
      this.selectedFile = file;
    } else {
      console.error('Please select a valid CSV file.');
      this.selectedFile = null;
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.csvService.uploadCsv(formData).subscribe({});
    } else {
      console.error('No file selected or invalid file type.');
    }
  }
}
