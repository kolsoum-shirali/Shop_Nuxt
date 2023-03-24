import Vue from 'vue'
const moment = require('jalali-moment')

Vue.mixin({
    data() {
        return {}
    },
    methods: {
        jMoment(time) {
            return moment.unix(time).locale('fa').format('HH:mm:ss  YYYY/M/D')
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            } else {
                return '0'
            }
        },
        setAltImg(e) {
            e.target.src = require('@/assets/images/notFound.png')
        },
        goUp() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        },
        decodePersianName(x) {
            return x
                .replace(/[\u200B-\u200C\uFEFF]/g, ' ')
                .replace(/  +/g, ' ')
                .split(' ')
                .join('-')
        },
    },
})