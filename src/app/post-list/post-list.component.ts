import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../post.service';
import { BootcampService } from '../bootcamp.service';
import { Post } from '../post.model';
import { Bootcamp } from '../bootcamp.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService, BootcampService]
})
export class PostListComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  selectedBootcampId: string;
  selectedBootcamp: Bootcamp;
  selectedPosts: Post[] = [];

  constructor(
     private route: ActivatedRoute,
     private location: Location,
     private router: Router,
     private postService: PostService,
     private bootcampService: BootcampService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.selectedBootcampId = urlParameters['id'];
    });
    this.bootcampService.getBootcampById(this.selectedBootcampId).subscribe(dataLastEmittedFromObserver => {
      this.selectedBootcamp = new Bootcamp(dataLastEmittedFromObserver.name,
                                          dataLastEmittedFromObserver.description,
                                          dataLastEmittedFromObserver.location,
                                          dataLastEmittedFromObserver.rating)
    });

    this.postService.getPosts().subscribe(dataLastEmittedFromObserver => {
      for(let i = 0; i < dataLastEmittedFromObserver.length; i++){
        this.selectedPosts.push(new Post(dataLastEmittedFromObserver[i].name,
                                            dataLastEmittedFromObserver[i].author,
                                            dataLastEmittedFromObserver[i].description,
                                            dataLastEmittedFromObserver[i].rating,
                                            dataLastEmittedFromObserver[i].bootcampId));
      }

    });

  }

  goToNew() {
    this.router.navigate(['new-post', this.selectedBootcampId])
  }

}
