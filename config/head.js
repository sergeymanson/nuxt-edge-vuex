module.exports = {
    title: '{{ name }}',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
}
