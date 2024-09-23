import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CsvUpload } from '../models/csv-upload';

@Injectable({
  providedIn: 'root',
})
export class CsvUploadService {
  private apiUrl = environment.apiUrl + 'csvUpload'; // Replace with your API endpoint
  private apiUrl1 = environment.apiUrl1 + 'admin/game/addGame'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // uploadCsv(formData: FormData): Observable<CsvUpload> {
  //   return this.http.post<CsvUpload>(this.apiUrl1, formData);
  // }
  uploadCsv(formData: FormData): Observable<CsvUpload> {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QWRtaW4iLCJpYXQiOjE3MjQxNTAzMDQsImV4cCI6MTcyNDE1MTc0NH0.P2CFhbWdX5q504ksaUmlWmwC4zGV1Jvc--ufbQecUtE'; // Replace with your actual Bearer token

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<CsvUpload>(this.apiUrl1, formData, { headers });
  }

  getCsvUploads(): Observable<CsvUpload[]> {
    return this.http.get<CsvUpload[]>(this.apiUrl);
  }
}
