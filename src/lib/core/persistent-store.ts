export enum PersistentStoreKeys {
  Locale = 'locale',
  Username = 'username'
}

export class PersistentStore {
  /**
   * Load value by key name.
   * @param keyName
   * @param defaultValue
   */
  public static load (keyName: PersistentStoreKeys, defaultValue: unknown): unknown {
    const item: string | null = window.localStorage.getItem(keyName)
    return item !== null ? JSON.parse(item) : defaultValue
  }

  /**
   * Store value.
   * @param keyName
   * @param value
   */
  public static store (keyName: PersistentStoreKeys, value: unknown): void {
    window.localStorage.setItem(keyName, JSON.stringify(value))
  }
}
