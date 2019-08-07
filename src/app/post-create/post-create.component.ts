import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = '';
  /* set and store a content */
  //store a content is a property (a variable in a class)
  newPost ='NO CONTENT';
  onAddPost(){
    //this will fetch the user's input/output
    this.newPost = this.enteredValue;
    
  }

  constructor() { }

  ngOnInit() {
  }

}
