import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    private m_posts;
    private readonly m_url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private m_http_client: HttpClient) {
    }

    ngOnInit() {
        this.http.get(this.url).subscribe(
            response => {
                this.posts = response;
            }
        );
    }

    createPost(input: HTMLInputElement) {
        console.log('Here');
        let post = { title: input.value };
        this.http.post(this.url, JSON.stringify(post)).subscribe(
            response => {
                post.id = response.id;
                console.log(response);
            }
        )
    }

    get posts() { return this.m_posts; }
    set posts(value) { this.m_posts = value; }

    get http() { return this.m_http_client; }
    get url() { return this.m_url; }

}
