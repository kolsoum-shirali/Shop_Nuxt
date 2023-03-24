import useJwt from './jwt/useJwt'
const axios = require('axios')

const { jwt } = useJwt(axios, {})
export default jwt