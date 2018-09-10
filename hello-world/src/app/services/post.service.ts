import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    //****************
    // Class Members *
    //****************
    private readonly m_url = 'https://jsonplaceholder.typicode.com/posts';

    //**************
    // Constructor *
    //**************
    constructor(private m_http_client: HttpClient) {}

    //***********
    // Getters **
    //***********
    get url() { return this.m_url; }
    get http() { return this.m_http_client; }

    // Get the posts
    getPosts() {
        return this.http.get(this.url);
    }

    // post the post
    post(post) {
        return this.http.post(this.url, JSON.stringify(post));
    }

    // update the post
    update(post) {
        return this.http.patch(this.url + '/' + post.id,  JSON.stringify({isRead: true}));
    }

    // Delete the post
    delete(id) {
        return this.http.delete(this.url + '/' + id).pipe (

            //catchError(error => this.handleError(error))

        );
    }

    private handleError(error: HttpErrorResponse) {}
}
