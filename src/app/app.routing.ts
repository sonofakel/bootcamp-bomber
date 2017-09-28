import { BootcampListComponent } from './bootcamp-list/bootcamp-list.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';


const appRoutes: Routes = [
  {
    path: '',
    component: BootcampListComponent
  },
  {
    path: 'bootcamps/:id',
    component: PostListComponent
  },
  {
    path: 'new-post/:id',
    component: NewPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
