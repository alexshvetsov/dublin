import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  standalone: true,
  name: 'colorSquare',
})
export class ColorSquarePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const html = `<div style="width: 10px; height: 10px; background-color: ${value}; display: inline-block;"></div>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
