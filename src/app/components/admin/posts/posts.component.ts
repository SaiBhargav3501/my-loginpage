import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  constructor(private http:HttpClient){

  }

  allList:any=[]

  ngOnInit(): void {
    this.fetchpost()
  }

  fetchpost(){
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe( (resp)=>{
      console.log(resp)
      this.allList=resp
    }
    )
    console.log(this.allList[0])

  }
  


}
