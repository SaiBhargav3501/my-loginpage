import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
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
