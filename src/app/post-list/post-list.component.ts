import { Component, OnInit } from '@angular/core';

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
  posts = [];
  constructor() { }

  ngOnInit() {
  }

}
