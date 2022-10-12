import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './post';
import { ResourceService } from './resource.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  post:Post = new Post();

  constructor(private resourceService:ResourceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  create():void{
    this.resourceService.create(this.post).subscribe(
      res=>this.router.navigate(['/resouces'])
    );
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      p=>{
        let id=p['id'];
        if(id){
          this.resourceService.get(id).subscribe(
            po=>this.post=po
          );
        }
      }
    );
  }

  update():void{
    this.resourceService.update(this.post.id, this.post).subscribe(
      res=>this.router.navigate(['/resouces'])
    );
  }

}
