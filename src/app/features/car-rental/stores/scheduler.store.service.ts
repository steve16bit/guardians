import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedulerStoreService {
  isFormCard: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setFormCard(isFormCard: boolean) {
    this.isFormCard.next(isFormCard)
  }
}
