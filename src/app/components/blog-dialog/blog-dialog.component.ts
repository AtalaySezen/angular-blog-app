import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit {


  isUpdate: boolean = false;
  imageUrl:string='';
  title:string='';
  content:string='';
  body:string='';


  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<BlogDialogComponent>) {
    if (data.isUpdate) {
      this.isUpdate = true;
    }
    else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }

  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
