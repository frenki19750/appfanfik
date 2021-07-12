import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreatComponent implements OnInit{
  enteredTitle='';
  enteredContent='';
  private mode = 'create';
  //@ts-ignore
  private postId: string;
  //@ts-ignore
  post: Post;

  constructor(public postsService: PostsService, public route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
      //@ts-ignore
        this.postId = paramMap.get('postId');
        //@ts-ignore
        this.post = this.postsService.getPost(this.postId);
      }
        else {
          this.mode = 'create';

          this.postId = '';
        }
    });
  }

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
