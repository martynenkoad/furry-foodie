import Vuex from 'vuex'
import app from './modules/app.module'
import ui from './modules/ui.module'

export default new Vuex.Store({
  modules: {
    app,
    ui
  }
})
