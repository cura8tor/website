import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class NotificationService {
    public types = {
        success:'is-primary',
        info:'is-info',
        danger:'is-danger'
    }
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