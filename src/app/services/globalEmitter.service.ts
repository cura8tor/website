import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class GlobalEmitterService {

    private subject = new Subject<any>();
 
    sendMessage(type:string, message: any) {
        this.subject.next({type, message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}