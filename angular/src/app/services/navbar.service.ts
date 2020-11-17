import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
    visible: boolean;
    title: string;
  
    constructor() { this.visible = false; }

    setTitle(title:string){
      this.title=title;
    }
    getTitle(){
      return this.title
    }
  
    hide() { 
      this.visible = false; 
    }
  
    show() { 
      this.visible = true; 
    }
  
    toggle() { 
      this.visible = !this.visible; 
    }
}
