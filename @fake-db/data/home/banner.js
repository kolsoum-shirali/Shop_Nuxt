import mock from '@/@fake-db/mock'
const data = {
    banners: [{
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/sarmaye-min.png',
            lazyImage: 'https://picsum.photos/10/6?image=15',
            icon: 'mdi-cash',
            title: 'بازار سرمایه',
            number: 95,
        },
        {
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/language-min.png',
            lazyImage: 'https://picsum.photos/10/6?image=15',
            icon: 'mdi-translate',
            title: 'آموزش زبان ها ',
            number: 55,
        },
        {
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/startup-min.png',
            lazyImage: 'https://picsum.photos/10/6?image=15',
            icon: 'mdi-account-group-outline',
            title: 'راهنمای استارت اپ',
            number: 5,
        },
        {
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/microsoft-min.png',
            lazyImage: 'https://picsum.photos/10/6?image=15',
            icon: 'mdi-microsoft',
            title: 'مجموعه مایکروسافت',
            number: 15,
        },
        {
            image: 'https://demos.mahdisweb.net/digiacademy/wp-content/uploads/2019/10/workoffice-min.png',
            lazyImage: 'https://picsum.photos/10/6?image=15',
            icon: 'mdi-code-tags',
            title: ' برنامه نویسی',
            number: 35,
        },
    ],
}
mock.onGet('/banner').reply((config) => {
    return [200, data.banners]
})