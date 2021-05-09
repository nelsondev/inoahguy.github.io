<template>
    <v-col
    cols="12"
    md="6"
    lg="4"
    xl="3"
    >
        <!-- Image -->
        <v-img
        v-if="src.includes('.png') || src.includes('.gif')"
        :src="require(`@/portfolio/${src}`)"
        aspect-ratio="1"
        class="rounded"
        ></v-img>

        <!-- Video -->
        <v-img
        v-else-if="src.includes('.mp4')"
        aspect-ratio="1"
        class="rounded"
        >
            <video
            :src="require(`@/portfolio/${src}`)"
            autoplay
            muted
            width="100%"
            height="100%"
            controls
            loop
            ></video>
        </v-img>

        <!-- Youtube -->
        <v-img
        v-else
        aspect-ratio="1"
        class="rounded"
        >
            <iframe
            :src="`https://www.youtube-nocookie.com/embed/${src}?controls=0`"
            width="100%"
            height="100%"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
        </v-img>
    </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        src: String
    }
})
</script>