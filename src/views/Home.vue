<template>
    <div class="black">
        <v-img
            :src="require('@/assets/self.gif')"
            :lazy-src="require('@/assets/self.compressed.gif')"
            height="100vh"
            style="overflow-y: hidden"
            dark
        >
            <v-layout
                class="black"
                style="
                    position: absolute;
                    opacity: 0.5;
                    width: 100%;
                    height: 100%;
                "
            ></v-layout>
            <v-toolbar
                absolute
                flat
                color="transparent"
                style="width: 100%"
                class="wiggly"
            >
                <v-spacer></v-spacer>
                <v-toolbar-items class="align-center">
                    <v-btn text color="transparent" to="/work"
                        ><span class="white--text">Work</span></v-btn
                    >
                    <v-btn text color="transparent" to="/about"
                        ><span class="white--text">About</span></v-btn
                    >
                </v-toolbar-items>
            </v-toolbar>
            <v-layout fill-height justify-center align-center column>
                <v-spacer></v-spacer>
                <div class="px-3">
                    <v-img
                        :src="require('@/assets/logo.light.svg')"
                        contain
                        width="60px"
                        height="30px"
                        class="wiggly"
                    ></v-img>
                    <span
                        class="wiggly text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-thin"
                        ><span class="font">NOAH DASHNEY</span></span
                    >
                    <span
                        class="wiggly text-h6 text-sm-h5 text-md-h5 text-lg-h4 font"
                        >Artist and Illustrator</span
                    >
                </div>
                <v-spacer></v-spacer>
                <Footer />
            </v-layout>
        </v-img>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: () => ({}),
    components: {
        Footer: () => import("@/components/Footer.vue"),
    },
});
</script>