<script setup></script>

<template>
  <section class="content">
    <div>
      <h1 class="content-slider-text">Your Gateway to Smarter Payments</h1>
      <img class="content-slider-img" src="@/assets/images/black-yellow.png" />
    </div>
    <img class="content-img" src="@/assets/images/yellow-card-bg.png" />
  </section>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  background: $black;
  padding-left: 113px;
  width: 100%;

  &-img {
    max-width: 1040px;
    max-height: 947px;
    margin-top: -50px;
  }

  &-slider {
    &-text {
      font-size: 64px;
      max-width: 735px;
      margin-bottom: 74px;
    }
    &-img {
      max-width: 600px;
    }
  }
}

@media (max-width: $xl) {
  .content {
    padding-left: 48px !important;
    &-img {
      max-width: 580px;
      max-height: 700px;
      margin-top: -50px;
    }

    &-slider {
      &-text {
        font-size: 44px;
        max-width: 550px;
        margin-bottom: 62px;
        margin-left: 30px;
      }
      &-img {
        max-width: 460px;
      }
    }
  }
}

@media (max-width: $md) {
  .content {
    padding-top: 60px;
    padding-right: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-img {
      display: none;
    }

    &-slider {
      &-text {
        text-align: center;
        font-size: 44px;
        max-width: 460px;
        margin-bottom: 48px;
        margin-left: 0;
      }

      &-img {
        max-width: 100%;
      }
    }
  }
}

@media (max-width: $xs) {
  .content {
    padding-right: 16px !important;
    padding-left: 16px !important;
    padding-top: 0px;

    &-slider {
      &-text {
        text-align: center;
        font-size: 28px;
        max-width: 280px;
        margin: 0 auto;
        margin-bottom: 48px;
      }
    }
  }
}
</style>
