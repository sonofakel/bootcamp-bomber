import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Bootcamp } from '../bootcamp.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { BootcampService } from '../bootcamp.service';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css'],
  providers: [BootcampService]
})
export class BootcampListComponent implements OnInit {
  bootcamps: FirebaseListObservable<any[]>;


  constructor(private router: Router, private bootcampService: BootcampService) { }

  ngOnInit() {
    this.bootcamps = this.bootcampService.getBootcamps();
  }

  goToBootcampDetailPage(clickedBootcamp) {
    this.router.navigate(['bootcamps', clickedBootcamp.$key]);
  }

}
