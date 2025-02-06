import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-details',
  imports: [NgIf, CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent implements OnInit {
  constructor(
    public rest: RestService,
    private activeroute: ActivatedRoute,
    private route: Router
  ) {}

  student: any;
  ngOnInit(): void {
    this.rest
      .getStudentById(this.activeroute.snapshot.params['id'])
      .subscribe((data: {}) => {
        this.student = data;
      });
  }
}
