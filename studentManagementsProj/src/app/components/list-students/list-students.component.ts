import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {

  constructor(private student: StudentsService){ }

  //object type
  studentData: any =[];
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void{
    // pagination
    // this.dtOptions={
    //   // pagingType:'full_numbers',
    //   // pageLength: 5,
    //   // lengthMenu: [5,10,15,50],
    //   // processing:true
    //   pagingType: 'full_numbers',
    //   pageLength: 1,
    //   lengthMenu: [5,10,15,50],
    //   processing: true,
    //   responsive: true,
    //   order: [[1, 'asc']]
    // };
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [2,4,6,8,10],
      processing: true,
      responsive: true,
      order: [[1, 'asc']],
      columnDefs: [{
        targets: [0],
        searchable:false,
        orderable: false,
        width: "50px"
      }]
    };
    
    this.student.getAllStudent().subscribe((allData)=>{
      // console.log(allData);
      this.studentData = allData;
    });
  }

  deleteStudent(student_id: any){
    this.student.deleteStudent(student_id).subscribe((result)=>{
      // console.log(result);
      //call ngonit so that when click on delete it also refresh list page
      this.ngOnInit();
      
    });
  }
}
