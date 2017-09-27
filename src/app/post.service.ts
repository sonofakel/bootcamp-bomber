import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
  this.posts = database.list('data/posts');

}

getPosts() {
  return this.posts;
}

addPosts(newPost) {
  this.posts.push(newPost);
}

getPostById(postId: string) {
  return this.database.object('posts/' + postId);
}

updatePost(localUpdatedPost){
    var postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
    postEntryInFirebase.update({name: localUpdatedPost.name,
                                author: localUpdatedPost.author,
                                description: localUpdatedPost.description,
                                rating: localUpdatedPost.rating});
  }

  deletePost(localPostToDelete){
    let postEntryInFirebase = this.getPostById(localPostToDelete.$key);
    postEntryInFirebase.remove();
  }

}
