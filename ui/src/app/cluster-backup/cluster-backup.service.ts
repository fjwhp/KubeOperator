import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BackupStrategy} from './backup-strategy';

@Injectable({
  providedIn: 'root'
})
export class ClusterBackupService {

  strategyUrl = '/api/v1/backupStrategy/';

  constructor(private http: HttpClient) {}

  listBackupStrategy(project_id: string): Observable<BackupStrategy> {
    return this.http.get<BackupStrategy>(this.strategyUrl + project_id);
  }

  createBackStrategy(item: BackupStrategy): Observable<BackupStrategy> {
    return this.http.post<BackupStrategy>(this.strategyUrl, item);
  }
}
