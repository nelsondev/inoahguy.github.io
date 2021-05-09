<template>
    <div class="my-5">
        <v-layout class="wiggly" justify-center>
            <v-btn icon href="https://www.instagram.com/inoahlad/" target="__blank" :dark="dark">
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://www.linkedin.com/in/noah-dashney/" target="__blank" :dark="dark">
                <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon href="https://www.youtube.com/channel/UCVQVOTTgEMNatT1UTQHvrsA" target="__blank" :dark="dark">
                <v-icon>mdi-youtube</v-icon>
            </v-btn>
        </v-layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        dark: Boolean
    }
})
</script>