import { Component, ViewChild, enableProdMode } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import { Service, SapObject } from './ceva.service';

if (!/localhost/.test(document.location.host))
{
  enableProdMode();
}

@Component({
  selector: 'app-ceva',
  templateUrl: 'ceva.component.html',
  styleUrls: ['ceva.component.scss'],
  providers: [Service],
  preserveWhitespaces: true,
})

export class CevaComponent
{
  @ViewChild(DxDiagramComponent, { static: false })

  diagram: DxDiagramComponent | undefined;

  currentObject: Object = new SapObject();

  objects: SapObject[];

  dataSource: ArrayStore;

  popupVisible = false;

  generatedID = 100;

  public NodesCount: number;
  public IsFullScreen: boolean = false;

  constructor(service: Service)
  {
    const that = this;
    this.objects = service.getObjects();
    this.NodesCount = this.objects.length;
    this.dataSource = new ArrayStore({
      key: 'ID',
      data: this.objects,
      onInserting(values)
      {
        values.ID = values.ID || that.generatedID++;
        values.Technical_Name = values.Technical_Name || "Object's Name";
      },
    });
  }

  isButtonVisible: boolean = false;

  itemTypeExpr(obj: any)
  {
    return 'object';
  }

  itemCustomDataExpr(obj: SapObject, value: any)
  {
    if (value === undefined)
    {
      return {
        Technical_Name: obj.Technical_Name,
        Description: obj.Description,
        Image: obj.Image,
      };
    }
    obj.Technical_Name = value.Technical_Name;
    obj.Description = value.Description;
    obj.Image = value.Image;
    return obj;
  }

  requestLayoutUpdateHandler(e: { changes: string | any[]; allowed: boolean; })
  {
    for (let i = 0; i < e.changes.length; i++)
    {
      if (e.changes[i].type === 'remove') { e.allowed = true; } else if (e.changes[i].data.Head_ID !== undefined && e.changes[i].data.Head_ID !== null) { e.allowed = true; }
    }
  }

  editObject(objects: SapObject)
  {
    this.currentObject = { ...objects };
    this.popupVisible = true;
  }

  deleteObject(objects: { ID: any; })
  {
    this.dataSource.push([{ type: 'remove', key: objects.ID }]);
  }

  cancelEditEmployee()
  {
    this.currentObject = new SapObject();
  }

  hasChildNodes(id: number): boolean
  {
    return this.objects.some(x => x.Head_ID === id);
  }

  public onFullScreen(e: any): void
  {
    this.IsFullScreen = true;
  }
}