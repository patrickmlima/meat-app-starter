import { EventEmitter } from '@angular/core';

export class NotificationService {
  notifier: EventEmitter<string> = new EventEmitter<string>();

  notify(message: string) {
    this.notifier.emit(message);
  }
}
