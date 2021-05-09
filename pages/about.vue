<template>
    <v-container>
        <Menu text="About" to="/work" />
        <v-row>
            <v-col cols="12" sm="12" md="6" class="d-flex align-center justify-center">
                <v-img
                class="d-none d-sm-none d-md-block"
                contain
                aspect-ratio="1"
                :src="require('@/assets/logo_dla.svg')"
                ></v-img>
            </v-col>
            <v-col
                cols="12"
                sm="12"
                md="6"
                class="d-flex justify-center flex-column"
                style="font-size: 18pt; font-weight: 500"
            >
                Hello, <br><br>

                My names Noah Dashney, a freelance artist, illustrator 
                and animator based in the Calgary metropolitan area.<br><br>

                I create unique and memorable custom art and animation
                content. My work consists of commissioned projects 
                such as visual advertising, graphic design, and music 
                videos.<br><br>

                Contact me:<br>
                <v-tooltip
                v-model="copied"
                left
                >
                    <template v-slot:activator>
                        <a @click="copy">noah.dashney@edu.sait.ca</a>
                    </template>
                    <span>Copied!</span>
                </v-tooltip>
            </v-col>
        </v-row>
        <Footer />
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        copied: false
    }),
    methods: {
        copy() {
            navigator.clipboard.writeText('noah.dashney@edu.sait.ca')
            this.copied = true
            setTimeout(() => this.copied = false, 800)
        }
    }
})
</script>