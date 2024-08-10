import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkMode: WritableSignal<boolean>;

  constructor() {
    this.darkMode = signal(false);
  }

  toggleDarkMode(): void {
    this.darkMode.update((prev) => !prev);
  }

  setDarkMode(value: boolean): void {
    this.darkMode.update(() => value);
  }

  getDarkMode(): boolean {
    return this.darkMode();
  }

}
