import mock from '@/@fake-db/mock'
const data = {
    addresses: [],
}

mock.onGet('/account/addresses').reply((config) => {
    return [200, data.addresses]
})

mock.onPost('/account/addresses').reply((config) => {
    data.addresses.push({
        ...JSON.parse(config.data),
        id: Math.floor(Math.random() * 100),
    })
    return [201, { data }]
})

mock.onPut('/account/addresses').reply((config) => {
    const result = data.addresses.findIndex(
        (item) => item.id === JSON.parse(config.data).id
    )
    data.addresses[result] = JSON.parse(config.data)
    return [201, JSON.parse(config.data)]
})
mock.onDelete(/\/account\/addresses\/\d+/).reply((config) => {
    const task = data.addresses.find((t) => t.id === config.id)
    data.addresses.splice(task, 1)
    return [200]
})