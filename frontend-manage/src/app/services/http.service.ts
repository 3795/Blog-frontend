import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private prefix: string = "http://api.ntshare.cn/blog/v1/backend";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }),
    withCredentials: true,
  };

  constructor(private httpClient: HttpClient) {}

  /**
   * 无参Get请求
   * @param {string} url
   * @returns {any}
   */
  public get(url: string): Observable<any> {
    return this.httpClient.get(this.prefix + url, {
      withCredentials: true,
    });
  }

  /**
   * 有参Get请求
   * @param {string} url
   * @param {HttpParams} params
   * @returns {Observable<any>}
   */
  public getWithParams(url: string, params: HttpParams): Observable<any> {
    return this.httpClient.get(this.prefix + url, {withCredentials: true, params});
  }

  /**
   * Post请求
   * @param {string} url
   * @param body
   * @returns {Observable<Object>}
   */
  public post(url: string, body: any): Observable<any> {
    return this.httpClient.post(this.prefix + url, body, this.httpOptions);
  }

  /**
   * Put请求
   * @param {string} url
   * @param body
   * @returns {Observable<any>}
   */
  public put(url: string, body: any): Observable<any> {
    return this.httpClient.put(this.prefix + url, body, this.httpOptions);
  }

  /**
   * Patch请求
   * @param {string} url
   * @param body
   * @returns {Observable<any>}
   */
  public patch(url: string, body: any): Observable<any> {
    return this.httpClient.patch(this.prefix + url, body, this.httpOptions);
  }

  /**
   * Delete请求
   * @param {string} url
   * @returns {Observable<any>}
   */
  public delete(url: string): Observable<any> {
    return this.httpClient.delete(this.prefix + url, {
      withCredentials: true
    });
  }
}
