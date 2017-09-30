import { Injectable } from "@angular/core";
import {baseDataHandler} from './baseDataHandler.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class StorageService extends baseDataHandler{
    
    storeItems (fileListArray:Array<any>):Observable<any>{
        const files = fileListArray.map(f=>{
            const {dataURL, name} = f
            return this.fromPromise(this.imageContainer.child(name).putString(dataURL, 'data_url'))
        })

        return this.joinPromises(files)
    }    
}