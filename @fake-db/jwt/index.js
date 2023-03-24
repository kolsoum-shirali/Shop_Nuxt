import jwt from 'jsonwebtoken'
import mock from '@/@fake-db/mock'

const data = {
    users: [{
        id: 1,
        firstName: 'کلثوم',
        lastName: 'شیرعلی',
        mobile: '09055871223',
        email: 'kolsoum@gmail.com',
        password: '0000aA',
        rePassword: '0000aA',
    }, ],
}

// ! These two secrets shall be in .env file and not in any other file
const jwtConfig = {
    secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
    refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
    expireTime: '10m',
    refreshTokenExpireTime: '10m',
}

mock.onPost('/jwt/login').reply((request) => {
    const { mobile, password } = JSON.parse(request.data)

    let error = {
        email: ['Something went wrong'],
    }

    const user = data.users.find(
        (u) => u.mobile === mobile && u.password === password
    )

    if (user) {
        try {
            const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, {
                expiresIn: jwtConfig.expireTime,
            })
            const refreshToken = jwt.sign({ id: user.id },
                jwtConfig.refreshTokenSecret, {
                    expiresIn: jwtConfig.refreshTokenExpireTime,
                }
            )

            const userData = {...user }

            // delete userData.password

            const response = {
                userData,
                accessToken,
                refreshToken,
            }

            return [200, response]
        } catch (e) {
            error = e
        }
    } else {
        error = {
            email: ['ایمیل یا شماره موبایل نامعتبر می باشد'],
        }
    }

    return [400, { error }]
})

mock.onPost('/jwt/register').reply((request) => {
    const { firstName, lastName, mobile, email, password, rePassword } =
    JSON.parse(request.data)

    // If not any of data is missing return 400
    if (!(firstName && lastName && mobile && email && password && rePassword))
        return [400]

    const isEmailAlreadyInUse = data.users.find((user) => user.email === email)
    const ismobileAlreadyInUse = data.users.find((user) => user.mobile === mobile)


    const error = {
        email: (() => {
            if (!email) return ['Please enter your email.']
            if (isEmailAlreadyInUse) return ['این ایمیل قبلا مورداستفاده قرارگرفته است']
            return null
        })(),
        mobile: (() => {
            if (!mobile) return ['Please enter your mobile.']
            if (ismobileAlreadyInUse) return ['این شماره موبایل قبلا مورداستفاده قرارگرفته است']
            return null
        })(),
    }

    if (!error.mobile && !error.email) {
        const userData = {
            firstName,
            lastName,
            mobile,
            email,
            password,
            rePassword,

        }

        // Add user id
        const { length } = data.users
        let lastIndex = 0
        if (length) {
            lastIndex = data.users[length - 1].id
        }
        userData.id = lastIndex + 1

        data.users.push(userData)

        const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, {
            expiresIn: jwtConfig.expireTime,
        })

        const user = {...userData }
            // delete user.password
        const response = {
            userData: user,
            accessToken,
        }

        return [200, response]
    }
    return [400, { error }]
})

mock.onPost('/jwt/refresh-token').reply((request) => {
    const { refreshToken } = JSON.parse(request.data)

    try {
        const { id } = jwt.verify(refreshToken, jwtConfig.refreshTokenSecret)

        const userData = {...data.users.find((user) => user.id === id) }

        const newAccessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn,
        })
        const newRefreshToken = jwt.sign({ id: userData.id },
            jwtConfig.refreshTokenSecret, {
                expiresIn: jwtConfig.refreshTokenExpireTime,
            }
        )

        // delete userData.password
        const response = {
            userData,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        }

        return [200, response]
    } catch (e) {
        const error = 'Invalid refresh token'
        return [401, { error }]
    }
})