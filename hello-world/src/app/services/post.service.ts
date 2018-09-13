import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class PostService extends DataService {

    //**************
    // Constructor *
    //**************
    constructor(m_http_client: HttpClient) {
        super('https://jsonplaceholder.typicode.com/posts', m_http_client);
    }
}
