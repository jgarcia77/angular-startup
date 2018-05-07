import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from './home.models';

@Injectable()
export class HomeService {
    getMessage(): Observable<string> {
        return Observable.create(observer => {
            observer.next(Messages.Home);
        });
    }
}