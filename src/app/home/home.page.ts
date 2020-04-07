import { Component, OnInit, Renderer2, ViewChild, AfterContentInit, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';

// import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
/** Sites tab */
@Component({  selector: 'app-home',  templateUrl: 'home.page.html',  styleUrls: ['home.page.scss'],})
export class HomePage implements OnInit{
  /** This variable is used for storing site list array */ 
siteList= [ 
  {
  name: 'Rajkumar', age: 25
},
{
  name: 'Prateek', age: 25
},
{
  name: 'Nisha', age: 25
}
];  

  disableScroll = true;
  @ViewChild('reorderRef', { static: false }) ionItemReorder;
  sub = new Subscription();
  @ViewChild('reorderRef', { static: false }) reorderREdf;  /** @ignore */  
constructor(     private renderer: Renderer2,    private cd: ChangeDetectorRef,       private ngZone: NgZone,  ) 
{    
  
}
  /** Angular lifecycle hook used for initialising page data */ 
 ngOnInit() {   
  }

 
  /**   * This method is used for reordering sitelist data   * @param updatedListData updated list data from reorder component   */  
reorderItems(updatedListData: any) {    
  console.log(updatedListData);   
   const itemMove = this.siteList.splice(updatedListData.detail.from, 1)[0];    
  this.siteList.splice(updatedListData.detail.to, 0, itemMove);    updatedListData.detail.complete();   
   } 
   /**   * This method is used for reordring device list   * @param event cdk drag and drop event   */  
  // drop(event: CdkDragDrop<string[]>) {    moveItemInArray(this.siteList, event.previousIndex, event.currentIndex);    // const initalObj = {    //   elementList: this.favoritesList,    //   reverse: false,    //   alphabeticallySort: false    // };    this.sortingService.addSiteDataToIonicStorage(this.siteList, false, false);    // this.persistDataService.setFavoritesSortValue(initalObj).subscribe(() => { });  }
 


 onHold() {   
   console.log('subed');
  this.disableScroll = false;   
}

}
