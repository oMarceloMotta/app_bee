import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    if (this._storage == null) {
      this._storage = storage;
    }
  }

  public async set(key: string, value: any): Promise<void> {
    await this._storage?.set(key, JSON.stringify(value));
  }

  public async get(key: string): Promise<any> {
    const value = await this._storage?.get(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  public async remove(key: string): Promise<void> {
    await this._storage?.remove(key);
  }
}
