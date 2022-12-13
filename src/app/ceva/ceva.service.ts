import { Injectable } from '@angular/core';

export class SapObject {
  ID!: number;

  Head_ID!: number;

  Technical_Name!: string;

  Description!: string;

  Image!: string;

}

@Injectable()
export class Service {
  getObjects() {
    this.index = -1;
    var Objects = new Array<SapObject>();
    for (let i = 0; i <= 2; i++ ) {
      this.index ++;
      let newObject = new SapObject(); 
      newObject.ID = this.index;
      newObject.Description = "This is the description of the object";
      newObject.Technical_Name = "Technical Name";
      newObject.Head_ID = 0;
      newObject.Image = "";
      Objects.push(newObject);
      this.createNodes(this.index, i, 2).forEach(x => Objects.push(x));
    }
    return Objects;
  }

  createNodes(Head_ID: number, count: number, depth: number): Array<SapObject>{
    var nodes = new Array<SapObject>();
    for (let i = 0; i< count; i++){
      this.index++;
      let newObject = new SapObject(); 
      newObject.ID = this.index;
      newObject.Description= "This is the description of the object";
      newObject.Technical_Name= "Technical Name";
      newObject.Head_ID= Head_ID;
      newObject.Image= "";
      nodes.push(newObject);
      for(let j = 0; j < depth; j++){
        this.createNodes(this.index, j%0 === 0? 1:2, depth-1).forEach(x => nodes.push(x));
      }
    }
    return nodes;
  }

   index = 0;
}
