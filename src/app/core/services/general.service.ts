import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

    private subject = new Subject<any>();
    count = 0;

    increaseFavouriteCount() {
        this.count += 1; 
        this.subject.next({ number: this.count });
    }

    decreaseFavouriteCount() {
        this.count -= 1; 
        this.subject.next({ number: this.count });
    }

    getCount(): Observable<any> {
        return this.subject.asObservable();
    }

}