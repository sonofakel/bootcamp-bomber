import { BootcampListComponent } from './bootcamp-list/bootcamp-list.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: BootcampListComponent
  },
  {
    path: 'bootcamps/:id',
    component: PostListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
