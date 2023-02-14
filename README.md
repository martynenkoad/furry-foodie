# furry-foodie-ui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Application Settings

Application can be configured via environment variables. Required prefix for environment variable is VUE_APP_.
The app will automatically parse name of environment variable. For example, if you look into `src/lib/settings/default-settings.ts`
the class contains structure of settings, let's take a look at this fragment as an example:
```
  debug: ISettingsDebug = {
    enabled: false
  }
```

So there's a setting with path: debug.enabled. This setting can be overridden via the following environment variable:
```
VUE_APP_DEBUG_ENABLED=true
# OR
VUE_APP_DEBUG_ENABLED=1
```

Another example, let's say we'd have something like
```
  api: ISettingsApi = {
    host: '',
    port: 50
  }
```

You would need the following environment variables to override these settings:
```
VUE_APP_API_HOST=https://example.com
VUE_APP_API_PORT=100
```
