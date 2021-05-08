<template>
    <v-layout justify-end align-center class="mb-5">
        <router-link to="/">
            <v-img
                :src="require('@/assets/logo.dark.svg')"
                contain
                max-width="50px"
                width="60px"
                height="50px"
                class="wiggly"
            ></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <router-link :to="to" class="text-decoration-none black--text">
            <div class="d-flex flex-column">
                <span class="font wiggly">{{text}}</span>
                <span
                    class="font-weight-light font wiggly"
                    style="font-size: 28pt"
                    >NOAH DASHNEY</span
                >
            </div>
        </router-link>
    </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        text: String,
        to: String
    }    
})
</script>