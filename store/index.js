import keys from '@/config/keys'
const cookieparser = process.server ? require('cookieparser') : undefined
export const mutations = {}
export const actions = {
    async nuxtServerInit({ dispatch, commit }, { req }) {
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                const token = parsed[keys.token]
                await dispatch('auth/saveTokenValue', token)
                let user = parsed[keys.user]
                user = JSON.parse(user)
                commit('auth/IS_USER_COOKIE', true)
                commit('auth/SET_USER', user)
            } catch (err) {
                console.log(err)
            }
        }
    },
    nuxtClientInit({ commit, dispatch }) {
        const cartItems = JSON.parse(localStorage.getItem(keys.cart)) || []
        commit('cart/SET_BASKET', cartItems)
    },
}