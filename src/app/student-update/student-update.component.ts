import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-student-update',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent implements OnInit {
  @Input() student: any = {
    id: 0,
    name: '',
    email: '',
    password: '',
    nationalityId: 0,
  };
  constructor(
    public rest: RestService,
    private activeroute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.rest
      .getStudentById(this.activeroute.snapshot.params['id'])
      .subscribe((data: {}) => {
        console.log(data);
        this.student = data;
      });
  }
  update() {
    this.rest.updateStudent(this.student).subscribe({
      error: (e) => console.log(e),
      complete: () => this.route.navigate(['/students']),
    });
  }
}
