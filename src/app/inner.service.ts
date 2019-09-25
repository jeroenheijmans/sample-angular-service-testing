import { Injectable, Inject } from '@angular/core';
import { BASE_API_URL } from './app.module';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InnerService {

  private _mySecret = 'default private field value';
  public someField = 'default field value';

  constructor(
    @Inject(BASE_API_URL) private apiUrl: string,
    private http: HttpClient,
  ) { }


  public get getSomeValue() {
    return 'default getter value';
  }

  public get theSecret() {
    return this._mySecret;
  }

  public set theSecret(value: string) {
    this._mySecret = value + ' (via setter)';
  }

  public getSynchronousObservable(): Observable<string> {
    return of('sync observable value');
  }

  public getDelayedObservableFrom(input: string): Observable<string> {
    return of('delayed ' + input).pipe(delay(3000));
  }

  public doActionOnServer(id: string, action: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/api/foobar/${id}`, { action, someBool: true });
  }
}
