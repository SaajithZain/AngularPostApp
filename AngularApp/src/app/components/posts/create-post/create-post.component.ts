import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  imagePreview: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onImagePicked(event : Event)
  {
    const file= (event.target as HTMLInputElement).files[0];
    const reader= new FileReader();
    reader.onload= () =>{
      this.imagePreview=reader.result;
    };
    reader.readAsDataURL(file);
  }

  onAddPost(){
    this.router.navigate(['/Posts']);
  }
}
