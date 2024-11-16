import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedulerStoreService {
  selectedCar: BehaviorSubject<{ image?: string, name?: string, price?: string }> = new BehaviorSubject<{ image?: string, name?: string, price?: string }>({
    image: '', name: '', price: ''
  });

  setCar(image?: string, name?: string, price?: string) {
    this.selectedCar.next({ image: image, name: name, price: price });
  }
}
