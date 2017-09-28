import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../post.service';
import { BootcampService } from '../bootcamp.service';
import { UserService } from '../user.service';
import { Post } from '../post.model';
import { Bootcamp } from '../bootcamp.model';
import { User } from '../user.model';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {
  selectedUserId: string;
  selectedBootcampId: string;
  selectedBootcamp: Bootcamp;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private postService: PostService,
    private bootcampService: BootcampService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.selectedBootcampId = urlParameters['id'];
    });

  }

  submitPost(title: string, body: string, rating: number){
    let newPost = new Post(title, body, rating, this.selectedBootcampId, this.selectedUserId);
    this.postService.addPosts(newPost);


}
}
