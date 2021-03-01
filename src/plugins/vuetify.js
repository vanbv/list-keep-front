import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'fa'
    }
}

export default new Vuetify(opts)
