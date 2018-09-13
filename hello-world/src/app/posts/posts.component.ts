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

    //**********
    // Getters *
    //**********
    get service() { return this.m_service; }
    get posts() { return this.m_posts; }

    //**********
    // Setters *
    //**********
    set posts(value) { this.m_posts = value; }


    // Called on component init
    ngOnInit() {
        this.service.getAll().subscribe(posts => this.posts = posts );
    }

    // create the post
    createPost(input: HTMLInputElement) {
        let post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.create(post).subscribe(
            data => {
                post['id'] = data['id'];
                console.log(data);
            },
            error => {
                this.posts.splice(0, 1);
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
        this.service.delete(post.id)
        .subscribe(
            () => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
            }
        );
    }
}
