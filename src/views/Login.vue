<template>
  <section class="layout-content mt-5">
    <LoginForm @success="$router.push('/')" @error="app.error($event)" />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/fire-admin-vue/components/LoginForm.vue"; // @ is an alias to /src

@Options({
  components: {
    LoginForm
  }
})
export default class Login extends Vue {}
</script>
