import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrl: './tag-selector.component.css'
})
export class TagSelectorComponent {
  tags: string[] = ['technology', 'business', 'entertainment', 'sports', 'health'];

  @Output() tagSelected = new EventEmitter<string>();

  selectTag(tag: string): void {
    this.tagSelected.emit(tag);
  }
}
