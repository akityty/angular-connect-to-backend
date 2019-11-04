import {Component, OnInit} from '@angular/core';
import {IPost} from '../post.interface';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import {BlogService} from '../blog.service';
import {Blog} from '../blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList: Blog[] = [];
  postForm: FormGroup;

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router,
    private blogService: BlogService
  ) {
  }

  ngOnInit(): void {
    this.blogService.getBlog().subscribe(next => (this.blogList = next), error => (this.blogList = []));
  }
/*  jsonDateToObject() {
    var object = JSON.parse('"createDate": {\n' +
      '            "year": 2019,\n' +
      '            "month": "OCTOBER",\n' +
      '            "chronology": {\n' +
      '                "calendarType": "iso8601",\n' +
      '                "id": "ISO"\n' +
      '            },');
  }*/

/*
  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.postService.getPosts().subscribe(next => (this.postList = next), error => (this.postList = []));
  }

  onSubmit() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.postService.createPost(value).subscribe(next => {
        this.postList.unshift(next);
        this.postForm.reset({
          title: '',
          body: ''
        });
      }, error => console.log(error));
    }
  }

  deletePost(i) {
    const post = this.postList[i];
    this.postService.deletePost(post.id).subscribe(() => {
      this.postList = this.postList.filter(t => t.id !== post.id);
    });
  }*/
}
