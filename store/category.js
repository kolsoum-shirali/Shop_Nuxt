export const state = () => ({
    categoryProducts: [],
    blockTitle: {},
    loading: false,
    voteRate: {},
    page: 1,
})
export const mutations = {
    SET_CATEGORY_PRODUCTS(state, payload) {
        state.categoryProducts = payload
    },
    SET_BLOCK_TITLE(state, payload) {
        state.blockTitle = payload
    },
    SET_CATEGORY_LOADING(state, payload) {
        state.loading = payload
    },
    SET_VOTE_RATE(state, payload) {
        state.voteRate = payload
    },
    SET_PAGE(state, payload) {
        state.page = payload
    },
}
export const actions = {
    setPagination({ commit }, payload) {
        commit('SET_PAGE', payload)
    },
    async getCategoryProducts({ commit, state }, payload) {
        commit('SET_CATEGORY_LOADING', true)
        commit('SET_PAGE', 1)
        try {
            const { data } = await this.$axios.get('/category')
            const categoryPoducts = data[Number(payload) - 1].products
            commit('SET_CATEGORY_PRODUCTS', categoryPoducts)
            commit('SET_VOTE_RATE', data[Number(payload) - 1].score)
            const blockTitle = {
                title: data[Number(payload) - 1].name,
                icon: 'mdi-archive-outline',
            }
            commit('SET_BLOCK_TITLE', blockTitle)
        } catch (err) {
            console.log(err)
        }
        commit('SET_CATEGORY_LOADING', false)
    },
    async sortedProducts({ commit }, payload) {
        commit('SET_CATEGORY_LOADING', true)
        commit('SET_PAGE', 1)
        try {
            const { data } = await this.$axios.get('/category/sort', {
                query: { sort: payload },
            })
            commit('SET_CATEGORY_PRODUCTS', data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
        commit('SET_CATEGORY_LOADING', false)
    },
}
export const getters = {}