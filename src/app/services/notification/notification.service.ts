import { Injectable } from "@angular/core";

@Injectable()
export class NotificationService {
    public types = {
        success:'is-primary',
        info:'is-info',
        danger:'is-danger'
    }
}