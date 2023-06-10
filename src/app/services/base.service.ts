import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {

    err: any;

    //TODO

    public baseUrl = 'http://localhost:3000';

    constructor(
        public _httpClient: HttpClient
    ) { }

    postReq(url: any, data: any) {
        //const token = this.getToken();

        return this._httpClient.post<any>(this.baseUrl + url, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                // Authorization: `Bearer ${token}`,
                'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
            }),
        });
    }

    getReq(url: any) {
        // const token = this.getToken();

        return this._httpClient.get<any>(this.baseUrlUpdate(url), {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                // Authorization: `Bearer ${token}`,
                'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
            }),
        });
    }

    putReq(url: any, data: any) {
        return this._httpClient.put<any>(this.baseUrlUpdate(url), data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': this.baseUrlUpdate(url)
            }),
        });
    }

    protected baseUrlUpdate(url: string): string {
        return (url.startsWith('/')) ? this.baseUrl + url : url;
    }

}