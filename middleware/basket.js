export default function({ store, redirect, route }) {
    if (!store.state.auth.userToken) {
        redirect('/signup')
    }
}