<template>
    <v-container>
        <Menu text="Work" to="/about" />
        <v-row>
            <Content 
            v-for="(item, index) in content"
            :key="index"
            :src="item"
            />
        </v-row>
        <Footer />
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    computed: {
        content() {
            const context = require
                // @ts-ignore
                .context("@/portfolio", true, /./)
                .keys()
                .map((x: string) => x.substr(2, x.length));

            return context
        }
    }
})
</script>