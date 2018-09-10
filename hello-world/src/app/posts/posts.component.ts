import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    //****************
    // Class Members *
    //****************
    private m_posts;

    //**************
    // Constructor *
    //**************
    constructor(private m_service: PostService) {}

    //********************
    // Getters / Setters *
    //********************
    get service() { return this.m_service; }
    get posts() { return this.m_posts; }
    set posts(value) { this.m_posts = value; }


    // Called on component init
    ngOnInit() {
        this.service.getPosts().subscribe(
            response => {
                this.posts = response;
            }
        );
    }

    // create the post
    createPost(input: HTMLInputElement) {
        let post = { title: input.value };
        input.value = '';
        this.service.post(post).subscribe(
            response => {
                post['id'] = response['id'];
                this.posts.splice(0, 0, post);
                console.log(response);
            }
        );
    }

    // update the post
    updatePost(post) {
        this.service.update(post).subscribe(
            response => {
            }
        );
    }

    // delete the post
    deletePost(post) {
        //this.service.delete(post.id).subscribe(
        this.service.delete(1234).subscribe(
            response => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
            }
        );
    }
}
