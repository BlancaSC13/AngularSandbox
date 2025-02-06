import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RestService } from '../rest.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: '¿Are you sure?',
      text: 'This action cannot be undone',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          this.rest.deleteStudent(id).subscribe((data: {}) => {
            Swal.fire('Deleted', 'The student has been removed.');
            this.getStudents();
          });
        } catch (error) {
          console.error('Error deleting student:', error);
          Swal.fire('Error', 'An error occurred while deleting the student.');
        }
      }
    });
  }
  add() {
    this.router.navigate(['/student-add']);
  }
}
