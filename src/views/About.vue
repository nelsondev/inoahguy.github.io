<template>
    <div>
        <v-container id="about" class="my-10">
            <Menu text="About" to="/work" />

            <v-row>
                <v-col cols="12" sm="12" md="6">
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
                    md="5"
                    class="d-flex justify-center flex-column"
                    style="font-size: 18pt; font-weight: 500"
                >
                    Lorem, <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, culpa necessitatibus eligendi blanditiis nisi
                    excepturi molestiae tenetur amet alias perferendis facilis
                    doloremque, incidunt ipsa corrupti atque sunt ullam beatae
                    sint? <br /><br />
                    Feel free to contact me at <a>email@email.com</a> or phone
                    me at <a>1 (403) 123-1234</a>
                </v-col>
            </v-row>
        </v-container>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    components: {
        Menu: () => import("@/components/Menu.vue"),
        Footer: () => import("@/components/Footer.vue"),
    },
});
</script>