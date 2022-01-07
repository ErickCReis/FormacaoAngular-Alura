import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective)
  public items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        this.moveFocus(ArrowDirections.RIGHT).focus();
        break;
      case 'ArrowDown':
        console.log('down');
        this.moveFocus(ArrowDirections.LEFT).focus();
        break;
      case 'ArrowLeft':
        console.log('left');
        this.moveFocus(ArrowDirections.LEFT).focus();
        break;
      case 'ArrowRight':
        console.log('right');
        this.moveFocus(ArrowDirections.RIGHT).focus();
        break;
      default:
        break;
    }
  }

  public moveFocus(direction: ArrowDirections): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[currentSelectIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }
    return direction === ArrowDirections.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirections {
  LEFT = -1,
  RIGHT = 1,
}
