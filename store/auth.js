import Cookies from 'js-cookie'
import keys from '@/config/keys'
import useJwt from '@/auth/jwt/useJwt'

export const state = () => ({
    userToken: '',
    userMobile: '',
    user: '',
    isUserCookie: false,
})
export const mutations = {
    SET_TOKEN(state, payload) {
        state.userToken = payload
    },
    SET_USER_MOBILE(state, payload) {
        state.userMobile = payload
    },
    SET_USER(state, payload) {
        state.user = payload
    },
    IS_USER_COOKIE(state, payload) {
        state.isUserCookie = payload
    },
}
export const actions = {
    saveTokenValue({ commit }, payload) {
        Cookies.set(keys.token, payload)
        commit('SET_TOKEN', payload)
        this.$axios.setToken(payload, 'Bearer')
    },
    async register({ commit, dispatch }, payload) {
        const { firstName, lastName, email, mobile, password, rePassword } = payload

        await useJwt
            .register({
                firstName,
                lastName,
                mobile,
                email,
                password,
                rePassword,
            })
            .then((response) => {
                useJwt.setToken(response.data.accessToken)
                dispatch('saveTokenValue', response.data.accessToken)
                commit('SET_USER_MOBILE', mobile)
                Cookies.set(keys.user, JSON.stringify(response.data.userData))
                commit('SET_USER', response.data.userData)
                useJwt.setRefreshToken(response.data.refreshToken)
                localStorage.setItem('userData', JSON.stringify(response.data.userData))
                commit('IS_USER_COOKIE', true)
                this.$toast.success('ثبت نام باموفقیت انجام شد', {
                    position: 'bottom-left',
                })
                this.$router.push('/profile')
            })
            .catch((error) => {
                if (error.response.data.error.email) {
                    this.$toast.error(error.response.data.error.email[0], {
                        position: 'bottom-left',
                    })
                }
                if (error.response.data.error.mobile) {
                    this.$toast.error(error.response.data.error.mobile[0], {
                        position: 'bottom-left',
                    })
                }
            })
    },
    async login({ commit, dispatch }, payload) {
        const { mobile, password } = payload
        await useJwt
            .login({
                mobile,
                password,
            })
            .then((response) => {
                const { userData } = response.data
                Cookies.set(keys.user, JSON.stringify(userData))
                commit('SET_USER', userData)
                dispatch('saveTokenValue', response.data.accessToken)
                useJwt.setToken(response.data.accessToken)
                useJwt.setRefreshToken(response.data.refreshToken)
                localStorage.setItem('userData', JSON.stringify(userData))
                commit('IS_USER_COOKIE', true)

                this.$toast.success('خوش آمدید', {
                    position: 'bottom-left',
                })
                this.$router.push('/profile')
            })
            .catch((error) => {
                if (error.response.data.error.email[0]) {
                    this.$toast.error(error.response.data.error.email[0], {
                        position: 'bottom-left',
                    })
                }
            })
    },
    logout({ commit }, payload) {
        localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
        localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)
        localStorage.removeItem('userData')
        commit('SET_USER', {})
        Cookies.remove(keys.user)
        commit('SET_TOKEN', null)
        Cookies.remove(keys.token)
        this.$axios.setToken('', 'Bearer')
        commit('IS_USER_COOKIE', false)
        this.$router.push('/')
        this.$toast.success('باموفقیت ازحساب کاربری خودخارج شدید', {
            position: 'bottom-left',
        })
    },
}