import mock from '@/@fake-db/mock'
const data = {
    realtimeSuggestion: [{
            id: 1,
            name: 'آموزش اکسل Microsoft Office Excel 2018',
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/microsoft-excel-min-522x295.png',
            video: 'https://demos.mahdisweb.net/digiacademy/download/113/',
            avarage_rate: 5,
            users_class: 45,
            price: {
                amount: 15000,
                discount_amount: 2000,
                discount_percentage: 4,
                final_amount: 13000,
            },
        },
        {
            id: 2,
            name: 'آموزش پروژه محور فتوشاپ | Photoshop',
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/photishoplearning-min-360x202.png',
            video: 'https://demos.mahdisweb.net/digiacademy/download/93/',
            avarage_rate: 3,
            users_class: 25,
            price: {
                amount: 25000,
                discount_amount: 4000,
                discount_percentage: 8,
                final_amount: 21000,
            },
        },
        {
            id: 3,
            name: 'آموزش برنامه نویسی جاوا',
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/javad-progtamming-min-360x202.png',
            video: 'https://demos.mahdisweb.net/digiacademy/download/66/',
            avarage_rate: 4,
            users_class: 35,
            price: {
                amount: 55000,
                discount_amount: 5000,
                discount_percentage: 11,
                final_amount: 50000,
            },
        },

        {
            id: 4,
            name: 'آموزش کورل پیشرفته',
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/coreldrawing-min-360x202.png',
            video: 'https://demos.mahdisweb.net/digiacademy/download/93/',
            avarage_rate: 2,
            users_class: 15,
            price: {
                amount: 38000,
                discount_amount: 8000,
                discount_percentage: 9,
                final_amount: 13000,
            },
        },
        {
            id: 5,
            name: 'آموزش پروژه محور برنامه نویسی دلفی',
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/Delphi-Programming-min-522x295.png',
            video: 'https://demos.mahdisweb.net/digiacademy/download/113/',
            avarage_rate: 5,
            users_class: 95,
            price: {
                amount: 60000,
                discount_amount: 5000,
                discount_percentage: 14,
                final_amount: 55000,
            },
        },
        {
            id: 6,
            name: 'دوره آموزشی برنامه نویسی اسمبلی',
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/assembly-programming-min-522x295.png',
            video: 'https://demos.mahdisweb.net/digiacademy/download/66/',
            avarage_rate: 4,
            users_class: 45,
            price: {
                amount: 30000,
                discount_amount: 2000,
                discount_percentage: 3,
                final_amount: 28000,
            },
        },
        {
            id: 7,
            name: 'آموزش برنامه نویسی متلب | MATLAB',
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/matlab-min-522x295.png',
            video: 'https://demos.mahdisweb.net/digiacademy/download/93/',
            avarage_rate: 3,
            users_class: 25,
            price: {
                amount: 20000,
                discount_amount: 1000,
                discount_percentage: 1,
                final_amount: 19000,
            },
        },
    ],
}

mock.onGet('/realtime/Suggestion').reply((config) => {
    return [200, data.realtimeSuggestion]
})