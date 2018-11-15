import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

/**
 * Create By Seven.wk
 * Description: 项目整体的HTTP请求服务
 * Create At 2018/11/15
 */

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get("/blog/v1" + url);
  }
}
