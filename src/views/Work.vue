<template>
    <div>
        <v-container id="work" class="my-10">
            <Menu text="Work" to="/about" />

            <!-- Content -->
            <v-layout column>
                <v-row>
                    <v-col
                        v-for="(item, index) in work"
                        :key="index"
                        cols="12"
                        md="6"
                        lg="4"
                        xl="3"
                    >
                        <!-- Images -->
                        <v-img
                            v-if="
                                item.includes('.png') || item.includes('.gif')
                            "
                            aspect-ratio="1"
                            :src="require(`@/portfolio/${item}`)"
                            class="rounded"
                        ></v-img>
                        <!-- Videos -->
                        <v-img
                            v-else-if="item.includes('.mp4')"
                            aspect-ratio="1"
                            class="rounded"
                        >
                            <video
                                autoplay
                                muted
                                width="100%"
                                height="100%"
                                controls
                                loop
                                :src="require(`@/portfolio/${item}`)"
                            ></video>
                        </v-img>
                        <!-- Youtube -->
                        <v-img v-else aspect-ratio="1">
                            <iframe
                                width="100%"
                                height="100%"
                                :src="`https://www.youtube-nocookie.com/embed/${item}?controls=0`"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </v-img>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: () => ({
        work: [] as any,
    }),
    created() {
        const context = require
            .context("@/portfolio", true)
            .keys()
            .map((x) => x.substr(2, x.length));

        this.work = context;
    },
    components: {
        Menu: () => import("@/components/Menu.vue"),
        Footer: () => import("@/components/Footer.vue"),
    },
});
</script>