import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from './home.models';
import * as VividSeats from './static-service';

@Injectable()
export class HomeService {
    getMessage(): Observable<string> {
        return Observable.create(observer => {
            observer.next(Messages.Home);
        });
    }

    test(): void {
        console.log(VividSeats);
    }

    allEvents(): Observable<any> {
        return Observable.create(observer => {
            VividSeats.default.eventService.all(function(response) {
                observer.next(response);
            }, function(error) {
                console.log(error);
            });
        });
    }
}