import { set, get } from 'lodash'
import DefaultSettings from './default-settings'

class Settings extends DefaultSettings {
  /**
   * Initialize a new instance of Settings class.
   */
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  constructor (variables: any = {}) {
    super()
    this.initFromEnvVariables(variables)
  }

  /**
   * Apply a value by path and typecast it properly.
   * @param path
   * @param value
   * @param type
   * @protected
   */
  public applyValue (path: string, value: string, type: string): void {
    switch (type) {
      case 'boolean':
        set(this, path, value.toLowerCase() === 'true' || value === '1')
        break
      case 'number':
        set(this, path, parseInt(value, 10))
        break
      case 'object':
      case 'string':
        set(this, path, value)
        break
      default:
        console.warn(`Type "${type}" is not supported`)
    }
  }

  /**
   * Initialize settings from environment variables.
   * @protected
   */
  /* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
  protected initFromEnvVariables (variables: any): void {
    const vars = variables && Object.keys(variables).length ? variables : process.env
    if (!vars) {
      return
    }

    Object.keys(vars).forEach((key: string) => {
      const newKey = key.replace('VUE_APP_', '')
      const path = this.findPath(newKey)
      if (path === undefined) {
        return
      }
      const value = get(this, path)
      if (value !== undefined) {
        this.applyValue(path, String(vars[key]), typeof value)
      }
    })
  }

  /**
   * Find path in current settings object.
   * @param path
   * @protected
   */
  protected findPath (path: string): string | undefined {
    const parts = path.toLowerCase().split('_')

    let buffer = ''
    let result = ''

    const capitalize = (str: string): string => str && str[0].toUpperCase() + str.slice(1)
    const checkPath = (part: string): string | undefined => {
      const path = `${result}${result.length ? '.' : ''}`
      const choices: Array<string> = [
        `${path}${buffer}${part}`,
        `${path}${buffer}${capitalize(part)}`
      ]

      for (const choice of choices) {
        if (get(this, choice) !== undefined) {
          return choice
        }
      }

      return undefined
    }

    parts.forEach((part: string) => {
      const path = checkPath(part)
      if (path !== undefined) {
        result = path
      } else {
        if (result.length > 0 && buffer.length) {
          part = capitalize(part)
        }
        buffer += part
      }
    })

    return result
  }
}

const settings = new Settings()
export { settings, Settings }
