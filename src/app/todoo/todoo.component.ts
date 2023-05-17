import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-todoo',
  templateUrl: './todoo.component.html',
  styleUrls: ['./todoo.component.css']
})
export class TodooComponent implements OnInit {
  constructor(private http:HttpClient){

  }

  allList:any=[]

  ngOnInit(): void {
    this.fetchpost()
  }

  fetchpost(){
   this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe((res)=>{
    this.allList=res
    console.log(res)
   })
    // console.log(this.allList[0])

  }


}
