interface IAppEvent {
  id: string,
  name: string,
  handler: (params: unknown) => void
}

class AppEvents {
  /**
   * List of events.
   */
  events: IAppEvent[] = []

  /**
   * Execute an event.
   * @param name
   * @param params
   */
  public execute (name: string, params: unknown): void {
    this.events.forEach((event: IAppEvent) => {
      if (event.name === name && event.handler) {
        event.handler(params)
      }
    })
  }

  /**
   * Subscribe for an event.
   * @param name
   * @param handler
   */
  public subscribe (name: string, handler: (params: unknown) => void): string {
    const id = `${name}-${Date.now()}`
    this.events.push({
      id,
      name,
      handler
    })

    return id
  }

  /**
   * Unsubscribe from an event by event's ID.
   * @param eventId
   */
  public unsubscribe (eventId: string): void {
    this.events = this.events.filter((event: IAppEvent) => event.id !== eventId)
  }
}

const appEvents = new AppEvents()
export default appEvents
