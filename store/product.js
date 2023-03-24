export const state = () => ({
    loading: false,
    books: [],
    sliderLoading: false,
})
export const mutations = {
    SET_PRODUCT_LOADING(state, payload) {
        state.loading = payload
    },
    SET_BOOK(state, payload) {
        state.books = payload
    },
    SET_SLIDER_LOADING(state, payload) {
        state.sliderLoading = payload
    },
}
export const actions = {
    async getProduct({ commit }, payload) {
        commit('SET_PRODUCT_LOADING', true)
        try {
            const books = await this.$axios.get('/ebooks/all')
            commit('SET_BOOK', books.data)
        } catch (err) {
            console.log(err)
        }
        commit('SET_PRODUCT_LOADING', false)
    },
    sliderLoading({ commit }, payload) {
        commit('SET_SLIDER_LOADING', payload)
    },
}
export const getters = {}