<template>
    <v-app>
        <v-main>
            <Wiggly />
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: () => ({
    }),
    watch: {
        $route: {
            immediate: true,
            handler(to, _from) {
                document.title = 'Noah Dashney | ' + to.name;
            }
        },
    },
    created() {
    },
    components: {
        Menu: () => import("@/components/Menu.vue"),
        Wiggly: () => import("@/components/Wiggly.vue")
    },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");

html,
body {
    overflow: auto !important;
    scroll-behavior: smooth;
}

.font {
    font-family: "Architects Daughter", cursive !important;
}

.btn-menu {
    transition: all 0.2s linear !important;
    border-bottom: 0px solid white;
}

.btn-menu:hover {
    transition: all 0.2s linear !important;
    border-bottom: 5px solid white;
}
</style>