import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post-model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>(); /*data we emmit will be of type Post

  /* set and store a content */
  //store a content is a property (a variable in a class)
  //newPost ='NO CONTENT';
  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    //this will fetch the user's input/output
    //this.newPost = this.enteredValue;
    const post: Post = {
      title: form.value.title, 
      content: form.value.content
      };   
    this.postCreated.emit(post);
  }

  constructor() { }

  ngOnInit() {
  }

}
