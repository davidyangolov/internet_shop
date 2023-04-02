import { createStore } from 'vuex'
import httpClient from "../../../services/http.service";
// Create a new store instance.
const usersdata = createStore({
    state () {
        return {
            users: [],
        }
    },
    actions: {
        async GET_USERS({commit}){
            const {status, data} = await httpClient.get('api/get-users');
            if (status === 200){
                commit('SET_USER', data)
            }
        }
    },
    mutations: {
        SET_USER (state, backendData) {
            state.users = backendData
        }
    },
})
export default usersdata
