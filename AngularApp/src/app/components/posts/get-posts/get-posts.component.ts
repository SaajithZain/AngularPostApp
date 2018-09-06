import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.css']
})
export class GetPostsComponent implements OnInit {

  newPostClicked:boolean;
  constructor() { }
  

  ngOnInit() {
    this.newPostClicked=false;
  }

 posts=[
   {title:'post1',content:'this is my first posyt'},
   {title:'post2',content:'this is my 2nd posyt'},
   {title:'post3',content:'this is my 3rd posyt'},
   {title:'post4',content:'this is my 4th posyt'},
   {title:'post5',content:'this is my 5th posyt'},
  
  ];  

  onAddPost( form: NgForm){
    
    if(form.valid){
      let postTitle:string;
      let postDescription:string;
    
      form.reset();
    }
    else{
      console.log("invalid");
    }
    }
}
