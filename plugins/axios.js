export default function({ store, app: { $axios, $toast }, redirect }) {
    $axios.setHeader('Content-Type', 'application/json')
    if (store.state.auth.userToken)
        $axios.setToken(store.state.auth.userToken, 'Bearer')
}