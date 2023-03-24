import mock from '@/@fake-db/mock'
const data = {
    avatar: [],
}
mock.onPost('account/user/avatar').reply((config) => {
    data.avatar.push({
        ...(config.data),
    })
    return [201, { data }]
})
