import { Component,EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../Services/post-service/post.service'
import { PostModel} from '../../../models/post.model'
import { ToastrComponentlessModule } from 'ngx-toastr';
import { getParseErrors } from '@angular/compiler';
@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.css']
})
export class GetPostsComponent implements OnInit {

  posts:PostModel[];
  newPostClicked: boolean;  
  constructor(private postService: PostService) { }
  postCreated = new EventEmitter();
  showmodal:boolean;
  ngOnInit() {
    this.newPostClicked = false;
    this.getPosts();
  }


  onAddPost(form: NgForm) {

    if (form.valid) {
      let postTitle: string;
      let postDescription: string;
      postDescription=form.value.postDescription;
      postTitle=form.value.postTitle;
     
      this.postService.post(postTitle, postDescription)
        .subscribe((res:any) => {
          console.log(res );
          this.getPosts();
          this.showmodal=false;
        }, error => {
          console.error(error, 'error')
        });
        form.reset();
        
    }
    else {
      console.log("invalid");
    }
  }
  getPosts(){
    this.postService.getUserPost().subscribe((res:any)=>{  
        this.posts=res;
        
    },error=>{
    });
  }
}
