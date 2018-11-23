/**
 * Create By Seven.wk
 * Description: 后台管理的service服务
 * Create At 2018/11/16
 */
import {HttpService} from "../../service/http.service";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class BackendService {

  private prefix: string = "/backend";

  constructor(private httpService: HttpService) {

  }


  public get(url: string):  Observable<any> {
    return this.httpService.get(this.prefix + url);
  }

  public getWithParams(url: string, params: HttpParams): Observable<any> {
    return this.httpService.getWithParams(this.prefix + url, params);
  }

  public post(url: string, body: any): Observable<any> {
    return this.httpService.post(this.prefix + url, body);
  }

  public put(url: string, body: any): Observable<any> {
    return this.httpService.put(this.prefix + url, body);
  }

  public patch(url: string, body: any): Observable<any> {
    return this.httpService.patch(this.prefix + url, body);
  }

  public delete(url: string): Observable<any> {
    return this.httpService.delete(this.prefix + url);
  }



}
