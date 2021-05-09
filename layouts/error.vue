<template>
    <v-app>
        <v-main>
            <v-layout fill-height column align-center justify-center>
                <div class="d-flex align-center justify-center mb-3">
                    <span class="text-h1 wiggly">404</span>
                    <div class="d-flex align-end fill-height">
                        <span class="text-h4 wiggly">Not<br />found.</span>
                    </div>
                </div>
                <div class="d-flex justify-center">
                    <v-btn class="wiggly" text to="/">Home</v-btn>
                    <v-btn class="wiggly" text to="/work">Work</v-btn>
                    <v-btn class="wiggly" text to="/about">About</v-btn>
                </div>
            </v-layout>
        </v-main>
    </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
