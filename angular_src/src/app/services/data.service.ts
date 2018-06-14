import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

     //private _url: string = "http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe"
    //private _url: string = "https://gist.githubusercontent.com/macbre/1bf709a169e70d84c62b808d46ab1623/raw/52fc657c32340670f49bd1781f6d0202bd5cac3a/rower_miejski.geojson"
    private _url: string = '../assets/map_service.json'
    //private _url: string = '../assets/test2.json'
    

    constructor(private _http: Http) { }

    getData() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'charset=utf-8');
        // headers.append('Content-Type','Access-Control-Allow-Headers');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4300');

        return this._http
            .get(this._url, { headers: headers })
            .map(res => res.json())
           
    }
}


    