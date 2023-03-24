export const state = () => ({
    loading: false,
    addresses: [],
    addressdialog: false,
    deletDialog: false,
    personInfo: {
        fullName: '',
        mobile: '',
        phone: '',
        postalCode: '',
        province: '',
        city: '',
        address: '',
        id: 0,
    },
})
export const mutations = {
    SET_PERSONINFO_FULLNAME(state, payload) {
        state.personInfo.fullName = payload
    },
    SET_PERSONINFO_MOBILE(state, payload) {
        state.personInfo.mobile = payload
    },
    SET_PERSONINFO_PHONE(state, payload) {
        state.personInfo.phone = payload
    },
    SET_PERSONINFO_POSTALCODE(state, payload) {
        state.personInfo.postalCode = payload
    },
    SET_PERSONINFO_PROVINCE(state, payload) {
        state.personInfo.province = payload
    },
    SET_PERSONINFO_CITY(state, payload) {
        state.personInfo.city = payload
    },
    SET_PERSONINFO_ADDRESS(state, payload) {
        state.personInfo.address = payload
    },
    SET_ADDRESS_LOADING(state, payload) {
        state.loading = payload
    },
    SET_USER_ADDRESSES(state, payload) {
        state.addresses = payload
    },
    SET_ADDRESS_DIALOG(state, payload) {
        state.addressdialog = payload
    },
    SET_DELET_BOX(state, payload) {
        state.deletDialog = payload
    },
    SET_PERSON_INFO(state, payload) {
        state.personInfo = payload
    },
}
export const actions = {
    setPersonInfoFullName({ commit }, payload) {
        commit('SET_PERSONINFO_FULLNAME', payload)
    },
    setPersonInfoMobile({ commit }, mobile) {
        commit('SET_PERSONINFO_MOBILE', mobile)
    },
    setPersonInfoPone({ commit }, phone) {
        commit('SET_PERSONINFO_PHONE', phone)
    },
    setPersonInfoPostalCode({ commit }, postalCode) {
        commit('SET_PERSONINFO_POSTALCODE', postalCode)
    },
    setPersonInfoProvince({ commit }, province) {
        commit('SET_PERSONINFO_PROVINCE', province)
    },
    setPersonInfoCity({ commit }, city) {
        commit('SET_PERSONINFO_CITY', city)
    },
    setPersonInfoAddress({ commit }, address) {
        commit('SET_PERSONINFO_ADDRESS', address)
    },
    setAddressDialog({ commit }, payload) {
        commit('SET_ADDRESS_DIALOG', payload)
    },
    setRemoveDialog({ commit }, payload) {
        commit('SET_DELET_BOX', payload)
    },
    setPersonInfo({ commit }, payload) {
        commit('SET_PERSON_INFO', payload)
    },

    async getAddress({ commit }, payload) {
        commit('SET_ADDRESS_LOADING', true)
        try {
            const { data } = await this.$axios.get('/account/addresses')
            commit('SET_USER_ADDRESSES', data)
        } catch (err) {
            console.log(err)
        }
        commit('SET_ADDRESS_LOADING', false)
    },
    async addAddress({ commit, dispatch }, payload) {
        const {
            fullName,
            mobile,
            phone,
            postalCode,
            province,
            city,
            address,
            id,
            location,
        } = payload

        if (!id) {
            try {
                await this.$axios.post(`account/addresses`, {
                    fullName,
                    mobile,
                    phone,
                    postalCode,
                    province,
                    city,
                    address,
                    location,
                })
                dispatch('setAddressDialog', false)
                dispatch('getAddress')
                this.$toast.success('آدرس باموفقیت ایجاد شد', {
                    position: 'bottom-left',
                })
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                await this.$axios.put('account/addresses', {
                    fullName,
                    mobile,
                    phone,
                    postalCode,
                    province,
                    city,
                    address,
                    id,
                    location,
                })
                dispatch('setAddressDialog', false)
                dispatch('getAddress')
                this.$toast.success('آدرس باموفقیت ویرایش شد', {
                    position: 'bottom-left',
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async removeAddress({ dispatch }, payload) {
        const { id } =
        payload
        console.log(payload)
        try {
            await this.$axios.delete(`account/addresses/${id}`, { id })
            dispatch('getAddress')
            dispatch('setRemoveDialog', false)
            this.$toast.success('آدرس باموفقیت حذف شد', {
                position: 'bottom-left',
            })
        } catch (err) {
            console.log(err)
        }
    },
}
export const getters = {}