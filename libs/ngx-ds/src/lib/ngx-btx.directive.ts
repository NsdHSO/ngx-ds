import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[libraryNgxBtx]',
  standalone: true
})
export class NgxBtxDirective  {
  /**
   * The hidden label for the element.
   */
  @Input() hiddenLabel?: string;
  /**
   * The icon for the element.
   */
  @Input() icon?: string;
  /**
   * The CSS class name for the icon.
   */
  @Input() iconClassName?: string;
  /**
   * The CSS class name for the label.
   */
  @Input() labelClassName?: string;
  /**
   * Determines if the element has a pill shape.
   */
  @Input() pill?: boolean;
  /**
   * The variant of the element.
   */
  @Input() variant?: string;


  private readonly elementRef: ElementRef| undefined;
  private readonly renderer: Renderer2| undefined;
  /**
   * Constructs a new instance of NgxBtxDirective.
   */
  constructor (){
    this.elementRef = inject(ElementRef)
    this.renderer = inject(Renderer2)
  }

  /**
   * Applies custom background and text color styles to the element.
   * This method can be called to apply the styles.
   */
  public applyCustomStyles (): void{
    this.applyStyles();
  }

  /**
   * Applies custom background and text color styles to the element.
   * You can customize the background and color values as needed.
   */
  private applyStyles (): void{
    const element = this.elementRef?.nativeElement;

    // Set the background and text color
    this.renderer?.setStyle(element, 'background', 'red');
    this.renderer?.setStyle(element, 'color', 'white');
  }
}
