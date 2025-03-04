<script setup>
import Button from '~/shared/ui/base/Button.vue'
</script>

<template>
  <section class="impact">
    <img class="impact-cards" src="@/assets/images/impact-cards.png" />
    <img class="yellow-ellipse" src="@/assets/images/yellow-ellipse.png" />
    <div class="impact-content">
      <Button width="220px">Reliable Payments</Button>
      <h1 class="impact-title">Empowering Payments with Trust Innovation</h1>
      <p class="impact-desc">
        At the core of our mission is a commitment to revolutionizing how transactions, combining
        technology
      </p>
      <Button width="158px">Our Impact</Button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.impact {
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 60px 125px 0 125px;
  gap: 50px;
  background: $black;

  &-title {
    font-size: 52px;
    font-weight: 400;
    width: 658px;
    margin-top: 64px;
    margin-bottom: 50px;
  }

  &-desc {
    max-width: 467px;
    width: 100%;
    font-size: 20px;
    margin-bottom: 50px;
  }
}

.impact-cards {
  width: 522px;
  height: 706px;
}

.yellow-ellipse {
  position: absolute;
  width: 50%;
  min-width: 600px;
  height: 100%;
  min-height: 750px;
  z-index: 0;
  top: -140px;
  left: 0;
}

@media (max-width: $xl) {
  .impact {
    padding: 60px 80px 0 80px;

    &-title {
      font-size: 38px;
      margin-bottom: 16px;
      max-width: 448px;
      width: 100%;
    }

    &-desc {
      font-size: 16px;
    }
  }

  .impact-cards {
    max-width: 320px;
    max-height: 420px;
    margin-top: 40px;
  }

  .yellow-ellipse {
    width: 40%;
    min-width: 400px;
    min-height: 600px;
    top: -80px;
  }
}

@media (max-width: $md) {
  .impact {
    padding: 60px 48px 0 48px;

    &-title {
      font-size: 28px;
      text-align: end;
    }

    &-desc {
      font-size: 14px;
      text-align: end;
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }

  .yellow-ellipse {
    width: 40%;
    min-width: 380px;
    min-height: 540px;
    top: -20px;
  }

  .impact-cards {
    max-width: 280px;
    max-height: 360px;
    margin-top: 60px;
  }
}

@media (max-width: $sm) {
  .impact {
    padding: 0px 16px 60px 16px;
    flex-direction: column;
    align-items: center;

    &-title {
      font-size: 28px;
      margin-top: 50px;
      text-align: center;
    }

    &-desc {
      font-size: 14px;
      text-align: center;
    }

    &-content {
      margin-top: -100px;
      align-items: center;
    }
  }

  .yellow-ellipse {
    display: none;
  }
}
</style>
