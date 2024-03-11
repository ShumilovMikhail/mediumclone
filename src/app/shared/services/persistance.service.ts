import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  set(key: string, data: unknown): void {
    try {
      let value: string = typeof data === 'string' ? data : JSON.stringify(data);
      localStorage.setItem(key, value);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    };
  };

  get(key: string): unknown {
    try {
      const value = localStorage.getItem(key);
      return typeof value === 'string' ? value : JSON.parse(value);
    } catch (e) {
      console.error('Error getting from localStorage', e);
      return null;
    };
  };
};
