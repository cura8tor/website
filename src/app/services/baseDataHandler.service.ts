import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app'; // for typings
import { FirebaseApp } from 'angularfire2'; // for methods
import { Inject } from "@angular/core";

export abstract class baseDataHandler {

    protected rootStorage;
    protected imageContainer;

    constructor (@Inject(FirebaseApp) private fb: FirebaseApp) {
        this.rootStorage = this.fb.storage().ref();
        this.imageContainer = this.rootStorage.child('items');
    }

    protected fromPromise(promise:Promise<any>){
        return Observable.fromPromise(promise);
    }

    protected joinPromises(data:Array<Observable<any>>):Observable<any>{
        const dataCollection = data.map(p=>{
            return p
        })

        return Observable.forkJoin(dataCollection);
    }
}