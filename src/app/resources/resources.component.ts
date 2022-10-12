import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { Post } from './post';
import { ResourceService } from './resource.service';
import { User } from './user';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  listaPosts: Post[] = [];
  listaPhotos: Photo[] = [];
  listaUsers: User[] = [];
  pagina!: number;

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.cargarPosts();
    this.cargarPhotos();
    this.cargarUsers();
  }

  cargarPosts():void {
    this.resourceService.getAllPosts().subscribe(
      respuesta => this.listaPosts = respuesta
    );
  }

  cargarPhotos():void {
    this.resourceService.getAllPhotos().subscribe(
      respuesta => this.listaPhotos = respuesta
    );
  }

  cargarUsers():void {
    this.resourceService.getAllUsers().subscribe(
      respuesta => this.listaUsers = respuesta
    );
  }



  //Eliminar un Post
  delete(post:Post):void {
    this.resourceService.delete(post.id).subscribe(
      res=>this.resourceService.getAllPosts().subscribe(
        response=>this.listaPosts= response
      )
    );
  }
}
