import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-emoji-renderer',
  standalone: true,
  imports: [],
  templateUrl: './emoji-renderer.component.html',
  styleUrl: './emoji-renderer.component.scss'
})
export class EmojiRendererComponent {
  @ViewChild('imageContainer', { static: false }) imageContainer!: ElementRef;

  @Input() value: string = '';
  
  html() {
    return this.value.replace(/:([^:]+):/g, '<img class="emoji" src="$1.gif" alt="$1 emoji" title=":$1:">');
  }

  fallbackImages = [
    'png',
    'webp',
    'jpg'
  ];

  ngAfterViewInit() {
    // Attach error event listener after the view is initialized
    this.imageContainer.nativeElement.addEventListener('error', (event: Event) => {
      const target = event.target as HTMLImageElement;

      if (target.tagName === 'IMG') {
        this.setFallback(target);
      }
    }, true);
  }

  setFallback(imgElement: HTMLImageElement) {
    const currentSrc = imgElement.src;
    const currentIndex = this.fallbackImages.findIndex(src => currentSrc.endsWith(src));

    let nextImage = this.fallbackImages[currentIndex + 1];
    if (nextImage) {
      nextImage = this.replaceLast(currentSrc, currentIndex == -1 ? 'gif' : this.fallbackImages[currentIndex], nextImage);
      imgElement.src = nextImage;
    } else {
      imgElement.src = 'frog.png'; // Final fallback
    }
  }

  replaceLast(str: string, search: string, replacement: string) {
    const lastIndex = str.lastIndexOf(search);
    if (lastIndex === -1) {
      return str;
    }
    return str.slice(0, lastIndex) + replacement + str.slice(lastIndex + search.length);
  }
}
