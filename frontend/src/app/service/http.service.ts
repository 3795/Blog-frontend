import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

/**
 * Create By Seven.wk
 * Description: 项目整体的HTTP请求服务
 * Create At 2018/11/15
 */

@Injectable()
export class HttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }),
    // withCredentials: true
  };


  constructor(private httpClient: HttpClient) {}

  /**
   * Get请求
   * @param {string} url
   * @returns {any}
   */
  public get(url: string): any {
    return this.httpClient.get("/blog/v1" + url);
  }

  /**
   * Post请求
   * @param {string} url
   * @param {string} requestBody
   * @returns {Observable<Object>}
   */
  public post(url: string, requestBody: string) {
    return this.httpClient.post("/blog/v1" + url, requestBody, this.httpOptions);
  }


}
