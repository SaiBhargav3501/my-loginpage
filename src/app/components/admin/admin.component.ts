import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
