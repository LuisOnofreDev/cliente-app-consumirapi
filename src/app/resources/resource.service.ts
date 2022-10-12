import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';
import { Post } from './post';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private url:string="http://jsonplaceholder.typicode.com/";

  constructor(private http:HttpClient) { }

  //Obtener todos los posts
  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.url + "posts");
  }

  //Obtener todas las fotos
  getAllPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.url + "photos");
  }

  //Obtener todos los usuarios
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url + "users");
  }



  //Obtener un Post
  get(id:number):Observable<Post>{
    return this.http.get<Post>(this.url + 'posts/' + id);
  }

  //Crear un Post
  create(post:Post):Observable<Post>{
    return this.http.post<Post>(this.url + 'posts/', post);
  }

  //Actualizar Post con PUT
  update(id:number, post:Post):Observable<Post>{
    return this.http.put<Post>(this.url + 'posts/' + id, post);
  }

  //Actualizar Post con PATCH
  patch(id:number, post:Post):Observable<Post>{
    return this.http.patch<Post>(this.url  + 'posts/' + id, post);
  }

  //Eliminar un Post
  delete(id:number):Observable<Post>{
    return this.http.delete<Post>(this.url + 'posts/' + id);
  }
}
