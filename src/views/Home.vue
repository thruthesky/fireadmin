<template>
  <div class="home">
    <LoginForm @success="success" @error="error" v-if="!app.user" />
    <hr />
    <RegisterForm @success="success" @error="error" v-if="!app.user" />
    <div @click="app.logout" v-if="app.user">
      UID: {{ app.user.uid }}, Logout
    </div>
    <router-link to="/admin" v-if="app.isAdmin">Admin Dashboard</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/fire-admin-vue/components/LoginForm.vue";
import RegisterForm from "@/fire-admin-vue/components/RegisterForm.vue";

@Options({
  components: {
    LoginForm,
    RegisterForm
  }
})
export default class Home extends Vue {
  success() {
    console.log("login or register success");
  }
  error(e: any) {
    alert(e.code + " : " + e.message);
  }
}
</script>
