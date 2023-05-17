import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  constructor(private http:HttpClient){

  }

  allList:any=[]

  ngOnInit(): void {
    this.fetchpost()
  }

  fetchpost(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe( (resp)=>{
      console.log(resp)
      this.allList=resp
    }
    )
    console.log(this.allList[0])

  }

}
