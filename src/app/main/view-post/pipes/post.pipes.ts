import { Pipe, PipeTransform } from "@angular/core";
import { CONSTANTS } from '../../../services'
@Pipe({
    name:'platform'
})
export class platform implements PipeTransform{
  transform (v) {
      const pl = CONSTANTS.PLATFORMS
      let tmpObj:any = {}
      pl.forEach(v=>tmpObj[v] = v)
      let ret = ''
      switch (v) {
        case tmpObj.Android:
            ret = 'android'
            break
        case tmpObj.iOs:
            ret = 'apple'
            break
        case tmpObj.Web:
            ret = 'web'
            break
        case tmpObj.Mac:
            ret = 'desktop-mac'
            break
        case tmpObj['Any Platform']:
            
        case tmpObj.Others:

      }
      return 'mdi mdi-' + ret
  }
}