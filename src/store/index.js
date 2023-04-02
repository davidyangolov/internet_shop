import {createStore} from 'vuex'
import usersdata from './modules/users/usersdata'
// Create a new store instance.
const store = createStore({
    modules: {
        usersdata
    },
})
export default store
