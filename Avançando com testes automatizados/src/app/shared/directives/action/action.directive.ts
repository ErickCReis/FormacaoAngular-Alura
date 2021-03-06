import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAction]',
})
export class ActionDirective {
  @Output() public appAction: EventEmitter<Event> = new EventEmitter<Event>();

  @HostListener('click', ['$event'])
  public handleClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  public handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.appAction.emit(event);
    }
  }
}
