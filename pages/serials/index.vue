<template>
    <div class="container"><br>
        <list
            :items="data"
            :model="$store.getters['getSerialEntities']"
            :title="$t('global.serials')">
            <div slot="footer">pagination</div>
        </list>
    </div>
</template>

<script>
    import list from '~/components/list'
    export default {
        name: 'serials',
        layout: 'default',
        components: {
            list
        },
        async asyncData ({$axios,  query}) {
            const {data: serials} = await $axios.get('/serials', {params: query});
            const response = {
                data: serials.data,
            };
            return response;
        },
        methods: {
            getData () {
                alert()
            }
        }
    }
</script>
