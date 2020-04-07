import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  template: ''
})
export class RecipeAddDialogEntryComponent {
  constructor(private bottomSheet: MatBottomSheet,
              private router: Router,
              private route: ActivatedRoute) {
    this.openDialog();
  }
  openDialog(): void {
    const bottomSheetRef = this.bottomSheet.open(RecipeAddComponent);
    bottomSheetRef.afterDismissed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<RecipeAddComponent>) { }

  ngOnInit(): void {
  }

}
