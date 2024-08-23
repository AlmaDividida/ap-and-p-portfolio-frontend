import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkModeEnabled: WritableSignal<boolean>;

  constructor() {
    this.darkModeEnabled = signal(false);
  }

  toggleDarkMode(): void {
    this.darkModeEnabled.update((prev) => !prev);
  }

  enableDarkMode(value: boolean): void {
    this.darkModeEnabled.update(() => value);
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeEnabled();
  }

  getDarkModeClass(): string {
    return this.isDarkModeEnabled() ? 'dark-mode' : '';
  }

}
