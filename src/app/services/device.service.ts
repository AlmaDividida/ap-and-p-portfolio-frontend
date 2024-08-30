import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const userAgent = navigator.userAgent || navigator.vendor;
      return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
    }
    return false;
  }

  isTablet(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const userAgent = navigator.userAgent || navigator.vendor;
      return /ipad|tablet/i.test(userAgent);
    }
    return false;
  }

  isDesktop(): boolean {
    return !this.isMobile() && !this.isTablet();
  }
}
