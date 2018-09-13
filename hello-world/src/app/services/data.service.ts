import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    //**************
    // Constructor *
    //**************
    constructor(private m_url: string, private m_http_client: HttpClient) {}

    //***********
    // Getters **
    //***********
    get url() { return this.m_url; }
    get http() { return this.m_http_client; }

    // Get the posts
    getAll() {
        return this.http.get(this.url);
    }

    // post the post
    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource));
    }

    // update the post
    update(resource) {
        return this.http.patch(this.url + '/' + resource.id,  JSON.stringify({isRead: true}));
    }

    // Delete the post
    delete(id) {
        return this.http.delete(this.url + '/' + id).pipe (

            //catchError(error => this.handleError(error))

        );
    }

    private handleError(error: HttpErrorResponse) {}
}
