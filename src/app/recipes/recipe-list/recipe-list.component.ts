import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simple test', 'http://images.media-allrecipes.com/images/75131.jpg'),
    new Recipe('A test recipe 2', 'Simple test', 'http://images.media-allrecipes.com/images/75131.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
