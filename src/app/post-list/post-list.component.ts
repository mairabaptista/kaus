import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post-model';
import { PostService } from '../posts.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  /*we want to fetch data from a server and put that on the template */
  /*posts = [
    {title: 'First Post', content: 'This is my first post'},
    {title: 'Second Post', content: 'This is my second post'},
    {title: 'Third Post', content: 'This is my third post'},
  ];*/
  @Input() posts: Post[] = [];

  postService: PostService;
  constructor(public postsService: PostService) { }

  ngOnInit() {
  }

}
