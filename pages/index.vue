<template>
    <div>
        <v-toolbar
        absolute
        width="100%"
        color="transparent"
        dark
        flat
        >
            <v-spacer></v-spacer>
            <v-toolbar-item>
                <v-btn to="/work" class="wiggly" text>Work</v-btn>
                <v-btn to="/about" class="wiggly" text>About</v-btn>
            </v-toolbar-item>
        </v-toolbar>

        <v-img
        :src="require('@/assets/self.gif')"
        :lazy-src="require('@/assets/self.compressed.gif')"
        height="100vh"
        width="100%"
        >
            <v-layout 
            justify-center 
            align-center 
            fill-height 
            column
            style="background-color: rgba(0,0,0,0.4)"
            >
                <div class="px-3">
                    <v-img
                    :src="require('@/assets/logo.light.svg')"
                    width="60px"
                    height="30px"
                    class="wiggly"
                    contain
                    ></v-img>
                    <span class="
                        wiggly
                        text-h3
                        text-sm-h2
                        text-md-h2
                        text-lg-h1
                        font-weight-thin
                        white--text
                    "><span class="font">NOAH DASHNEY</span></span>
                    <br class="d-block d-md-none">
                    <span class="
                        wiggly
                        text-h6 
                        text-sm-h5 
                        text-md-h5 
                        text-lg-h4 
                        white--text
                    ">Artist and Illustrator</span>
                </div>
                <Footer dark />
            </v-layout>
        </v-img>
    </div>
</template>
