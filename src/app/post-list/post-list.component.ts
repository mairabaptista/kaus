import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post-model';
import { PostService } from '../posts.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  /*we want to fetch data from a server and put that on the template */
  /*posts = [
    {title: 'First Post', content: 'This is my first post'},
    {title: 'Second Post', content: 'This is my second post'},
    {title: 'Third Post', content: 'This is my third post'},
  ];*/
  posts: Post[] = [];
  private postsSub: Subscription;

  postService: PostService;
  constructor(public postsService: PostService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this. postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
