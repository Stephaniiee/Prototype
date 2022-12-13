import { Injectable } from '@angular/core';

export class SapObject
{
  ID!: number;

  Head_ID!: number;

  Technical_Name!: string;

  Description!: string;

  Image!: string;

}

@Injectable()
export class Service
{
  getObjects()
  {
    this.index = -1;
    var Objects = new Array<SapObject>();
    for (let i = 0; i < 2; i++)//change 2 to 4, for more nodes
    {
      this.index++;
      let newObject = new SapObject();
      newObject.ID = this.index;
      newObject.Description = "This is the description of the object";
      newObject.Technical_Name = "Technical Name";
      newObject.Head_ID = 0;
      newObject.Image = "";
      Objects.push(newObject);
      this.createNodes(this.index, 1, 2).forEach(x => Objects.push(x));//change 2 to 4 for a complex depth level
    }
    return Objects;
  }

  createNodes(Head_ID: number, count: number, depth: number): Array<SapObject>
  {
    var nodes = new Array<SapObject>();
    for (let i = 0; i < count; i++)
    {
      this.index++;
      let newObject = new SapObject();
      newObject.ID = this.index;
      newObject.Description = "This is the description of the object";
      newObject.Technical_Name = "Technical Name";
      newObject.Head_ID = Head_ID;
      newObject.Image = "";
      nodes.push(newObject);
      if (this.index === 100)
      {
        return nodes;
      }
      for (let j = 0; j < depth; j++)
      {
        this.createNodes(this.index, this.generateRandomNumber(0, 2), depth - 1).forEach(x => nodes.push(x));
      }
    }
    return nodes;
  }

  index = 0;

  generateRandomNumber(min: number, max: number): number
  {
    var min: number = Math.ceil(min);
    var max: number = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
