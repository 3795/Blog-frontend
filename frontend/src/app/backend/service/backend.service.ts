/**
 * Create By Seven.wk
 * Description: 后台管理的service服务
 * Create At 2018/11/16
 */
import {HttpService} from "../../service/http.service";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class BackendService {



  constructor(private httpService: HttpService) {

  }

  /**
   * get服务
   * @returns {any}
   */
  public get(url: string):  Observable<string> {
    return this.httpService.get("/backend" + url);
  }

  public post(url: string, requestBody: any): Observable<any> {
    return this.httpService.post("/backend" + url, requestBody);
  }



}
