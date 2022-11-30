import Vue from 'vue'
import Vuetify from 'vuetify' // Call instance vuetify
import 'vuetify/dist/vuetify.min.css' // Styles for Vuetify
import '@mdi/font/css/materialdesignicons.css' // Material Desing Icons

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi',
    },
}

export default new Vuetify(opts)