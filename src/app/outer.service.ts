import { Injectable } from '@angular/core';
import { InnerService } from './inner.service';

@Injectable({
  providedIn: 'root'
})
export class OuterService {

  constructor(inner: InnerService) {

  }
}
