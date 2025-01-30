import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-student-add',
  imports: [FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent implements OnInit {
  ngOnInit(): void {}
  @Input() student = {
    id: 0,
    name: '',
    email: '',
    password: '',
    nationalityId: 0,
  };
  constructor(public rest: RestService, private router: Router) {}
  addStudent() {
    this.rest.addStudent(this.student).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => this.router.navigate(['/students']),
    });
  }
  cancel() {
    this.router.navigate(['/students']);
  }
}
