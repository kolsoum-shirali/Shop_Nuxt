import mock from '@/@fake-db/mock'
const data = {
    mostView: [{
            products: [{
                    id: 21,
                    name: 'آموزش کار با cPanel',
                    englishName: 'CPanel Learning',
                    image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2020/09/cpane.png',
                    video: 'https://demos.mahdisweb.net/digiacademy/download/66/',
                    avarage_rate: 5,
                    users_class: 35,
                    type: 0,
                    price: {
                        amount: 65000,
                        discount_amount: 2000,
                        discount_percentage: 8,
                        final_amount: 63000,
                    },
                },
                {
                    id: 12,
                    name: 'آموزش برنامه نویسی اندروید (Android) – مقدماتی',
                    englishName: 'learning android programming',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZbRyX3Ip_HqBcyjwEkBBwsyfhxTTA6Jtqg&usqp=CAU',
                    video: 'https://demos.mahdisweb.net/digiacademy/download/66/',
                    avarage_rate: 4,
                    users_class: 23,
                    type: 0,
                    price: {
                        amount: 58000,
                        discount_amount: 0,
                        discount_percentage: 0,
                        final_amount: 58000,
                    },
                },
                {
                    id: 2,
                    name: 'آموزش پروژه محور فتوشاپ | Photoshop',
                    englishName: 'learning Photoshop',
                    image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/photishoplearning-min.png',
                    video: 'https://demos.mahdisweb.net/digiacademy/download/93/',
                    avarage_rate: 3,
                    users_class: 25,
                    type: 0,
                    price: {
                        amount: 25000,
                        discount_amount: 4000,
                        discount_percentage: 8,
                        final_amount: 21000,
                    },
                },
                {
                    id: 4,
                    name: 'آموزش کورل پیشرفته',
                    englishName: 'learning advance corel',
                    image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/coreldrawing-min-360x202.png',
                    video: 'https://demos.mahdisweb.net/digiacademy/download/93/',
                    avarage_rate: 2,
                    users_class: 15,
                    type: 0,
                    price: {
                        amount: 38000,
                        discount_amount: 8000,
                        discount_percentage: 9,
                        final_amount: 13000,
                    },
                },
                {
                    id: 10,
                    name: 'آموزش شی‌ گرایی در سی شارپ',
                    englishName: 'learning oop in c#',
                    image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/c-sharp-min-522x295.png',
                    video: '/https://demos.mahdisweb.net/digiacademy/download/66/',
                    avarage_rate: 4,
                    users_class: 21,
                    type: 0,
                    price: {
                        amount: 67000,
                        discount_amount: 0,
                        discount_percentage: 0,
                        final_amount: 67000,
                    },
                },
            ],
        },
        {
            products: [{
                    id: 21,
                    name: 'آموزش کار با cPanel',
                    englishName: 'CPanel Learning',
                    image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2020/09/cpane.png',
                    video: 'https://demos.mahdisweb.net/digiacademy/download/66/',
                    avarage_rate: 5,
                    users_class: 35,
                    type: 0,
                    price: {
                        amount: 65000,
                        discount_amount: 2000,
                        discount_percentage: 8,
                        final_amount: 63000,
                    },
                },
                {
                    id: 12,
                    name: 'آموزش برنامه نویسی اندروید (Android) – مقدماتی',
                    englishName: 'learning android programming',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZbRyX3Ip_HqBcyjwEkBBwsyfhxTTA6Jtqg&usqp=CAU',
                    video: 'https://demos.mahdisweb.net/digiacademy/download/66/',
                    avarage_rate: 4,
                    users_class: 23,
                    type: 0,
                    price: {
                        amount: 58000,
                        discount_amount: 0,
                        discount_percentage: 0,
                        final_amount: 58000,
                    },
                },
            ],
        },
        {
            products: [{
                id: 16,
                name: 'آموزش مکاترونیک کاربردی (رایگان)',
                englishName: 'Mechatronics Learning',
                image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/mechatronics-learning-min.png',
                video: 'https://demos.mahdisweb.net/digiacademy/download/93/',
                avarage_rate: 3,
                users_class: 25,
                type: 0,
                price: {
                    amount: 0,
                    discount_amount: 0,
                    discount_percentage: 0,
                    final_amount: 0,
                },
            }, ],
        },
    ],
    sort: [
        { tab: 'پر فروش ترین ها', icon: 'mdi-basket-outline' },
        { tab: 'محبوب ترین ها', icon: 'mdi-heart-outline' },
        { tab: 'پر بحث ترین ها', icon: 'mdi-comment-outline' },
    ],
}

mock.onGet('/mostView/1').reply((config) => {
    return [200, data.mostView[0]]
})
mock.onGet('/mostView/2').reply((config) => {
    return [200, data.mostView[1]]
})
mock.onGet('/mostView/3').reply((config) => {
    return [200, data.mostView[2]]
})
mock.onGet('/mostView/sort').reply((config) => {
    return [200, data.sort]
})