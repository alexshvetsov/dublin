import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CsvUpload } from '../models/csv-upload';

@Injectable({
  providedIn: 'root',
})
export class CsvUploadService {
  private apiUrl = environment.apiUrl + 'csvUpload'; // Replace with your API endpoint
  private apiUrl1 = environment.apiUrl1 + 'admin/game/addGame'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  uploadCsv(formData: FormData): Observable<CsvUpload> {
    return this.http.post<CsvUpload>(this.apiUrl1, formData);
  }

  getCsvUploads(): Observable<CsvUpload[]> {
    return this.http.get<CsvUpload[]>(this.apiUrl);
  }
}
