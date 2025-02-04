import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-add',
  imports: [FormsModule, NgFor],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent implements OnInit {
  ngOnInit(): void {
    this.getNationalities();
  }

  @Input() student = {
    id: 0,
    name: '',
    email: '',
    password: '',
    nationalityId: 0,
  };

  nationalities: any = [];

  constructor(public rest: RestService, private router: Router) {}

  getNationalities() {
    this.rest.getNationalities().subscribe((data: {}) => {
      this.nationalities = data;
    });
  }
  addStudent() {
    if (
      this.student.name &&
      this.student.email &&
      this.student.password &&
      this.student.nationalityId
    ) {
      this.rest.addStudent(this.student).subscribe({
        next: (result) => console.log(result),
        error: (e) => console.error(e),
        complete: () => this.router.navigate(['/students']),
      });
    } else {
      console.log('All fields are required.');
    }
  }

  cancel() {
    this.router.navigate(['/students']);
  }
}
