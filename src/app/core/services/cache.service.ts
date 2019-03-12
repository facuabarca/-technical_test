import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
	set(name: string, value: any): void {
		localStorage.setItem(name, JSON.stringify(value));
	}

	get<T>(name: string): T {
		return JSON.parse(localStorage.getItem(name));
	}

	clear(name: string): void {
		localStorage.removeItem(name);
	}

	clearAll(): void {
		localStorage.clear();
	}
}
