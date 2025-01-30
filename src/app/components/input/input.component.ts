import { Component, forwardRef, Input, } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "number";

@Component({
  selector: 'app-input',
  imports: [
    ReactiveFormsModule
  ],
  providers : [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef( ()=> InputComponent),
        multi: true
      }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input () type : InputTypes = "text";
  @Input () placeholder: string = "";
  @Input () label: string = "";
  @Input () inputName: string = "";

  value: string = ""
  onChange: any = () => {}
  onTouchde: any = () => {}

  onInput(event : Event) {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
      this.onChange = fn
  }

  registerOnTouched(fn: any): void {
      this.onTouchde = fn
  }

}
