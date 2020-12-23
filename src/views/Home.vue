<template>
  <section class="home p-5">
    <div class="layout-content ">
      <div class="ios-icon mt-5 d-flex justify-content-end">
        <div class="d-flex flex-column align-items-end">
          <div class="p-2">
            다운로드
          </div>
          <div>
            <img src="/img/tmp/ios.png" />
          </div>
          <div class="p-2 text-white">
            Copyright (C) All Rights Reserved By 나리야
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  background-image: url("/img/tmp/couple.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.ios-icon {
  img {
    width: 180px;
  }
}
</style>
