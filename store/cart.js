import keys from '@/config/keys'
export const state = () => ({
    basket: [],
})
export const mutations = {
    ADD_TO_CART(state, payload) {
        if (state.basket.length) {
            const productIndex = state.basket.findIndex((item, index) => {
                return item.detail.id === payload.detail.id
            })
            if (productIndex !== -1) {
                state.basket[productIndex].amount += 1
            } else {
                state.basket.push({...payload, amount: 1 })
            }
        } else {
            state.basket.push({...payload, amount: 1 })
        }
        this.$toast.success('محصول به سبد خرید اضافه شد', {
            position: 'bottom-left',
        })
        localStorage.setItem(keys.cart, JSON.stringify(state.basket))
    },
    SET_BASKET(state, payload) {
        state.basket = payload
    },
    PRODUCT_REMOVE(state, payload) {
        state.basket.forEach((item, index) => {
            if (item.detail.id === payload) {
                state.basket.splice(index, 1)
                localStorage.setItem(keys.cart, JSON.stringify(state.basket))
                this.$toast.success('محصول ازسبد خرید حذف شد ', {
                    position: 'bottom-left',
                })
            }
        })
    },
}
export const actions = {
    addToCart({ commit }, payload) {
        commit('ADD_TO_CART', payload)
    },
    productRemove({ commit }, payload) {
        commit('PRODUCT_REMOVE', payload)
        console.log(payload)
    },
}