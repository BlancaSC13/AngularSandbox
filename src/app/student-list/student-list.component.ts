import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-student-list',
  imports: [NgFor, NgIf, RouterLink, CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  students: any = [];
  constructor(public rest: RestService, private router: Router) {}
  ngOnInit(): void {
    this.getStudents();
    //TODO: call getStudents to popullate the html table
  }
  getStudents() {
    this.rest.getStudents().subscribe((data: {}) => {
      this.students = data;
    });
  }
  delete(id: any) {
    //TODO: implement the deletion logic
  }
  add() {
    this.router.navigate(['/student-add']);
  }
}
