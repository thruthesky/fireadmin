<template>
  <div class="home">
    <LoginForm @success="success" @error="error" v-if="!app.user" />
    <div @click="app.logout" v-if="app.user">
      UID: {{ app.user.uid }}, Logout
    </div>
    <router-link to="/admin" v-if="app.isAdmin">Admin Dashboard</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/fire-admin-vue/components/LoginForm.vue";

@Options({
  components: {
    LoginForm
  }
})
export default class Home extends Vue {
  success() {
    console.log("login success");
  }
  error(e: any) {
    alert(e.code + " : " + e.message);
  }
}
</script>
