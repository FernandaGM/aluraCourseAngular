import {Directive, ElementRef, OnInit} from '@angular/core';
import {PlataformDetectorService} from '../../../core/plataform-detector/plataform-detector.service';

@Directive({
  selector: '[apImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private plataformDetectorService: PlataformDetectorService
  ) {}

  ngOnInit(): void {

    this.plataformDetectorService.isPlataformBrowser &&
      this.element.nativeElement.click();
  }


}
