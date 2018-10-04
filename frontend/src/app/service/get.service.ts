/**
 * Create By Seven.wk
 * Description: 封装的GET方法请求
 * Create At 2018/10/4
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GetService {

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get("/api/index/" + url);
  }
}
