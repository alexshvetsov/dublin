import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsvUploadRoutingModule } from './csv-upload-routing.module';
import { CsvUploadTableComponent } from './components/csv-upload-table/csv-upload-table.component';
import { CsvUploadFormComponent } from './components/csv-upload-form/csv-upload-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CsvUploadComponent } from './csv-upload.component';

@NgModule({
  declarations: [
    CsvUploadComponent,
    CsvUploadTableComponent,
    CsvUploadFormComponent,
  ],
  imports: [
    CommonModule,
    CsvUploadRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
})
export class CsvUploadModule {}
