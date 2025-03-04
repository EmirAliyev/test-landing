<script setup>
import Header from '~/global/ui/widgets/Header.vue'
import Button from '~/global/ui/base/Button.vue'
import RoundedTag from '~/global/ui/components/RoundedTag.vue'
</script>

<template>
  <section class="payments">
    <Header />
    <img class="vertical-cards" src="@/assets/images/vertical-cards.png" />
    <img class="yellow-ellipse" src="@/assets/images/yellow-ellipse.png" />
    <div class="payments-title">
      <div class="payments-title-content">
        <div class="payments-dt">
          <img class="payments-title-cube" src="@/assets/images/cube.svg" />
          <span>Your Payments,</span>
        </div>
        <div class="payments-title-text payments-dt">
          <span>Simplified and</span>
          <span>Secure</span>
        </div>
        <div class="payments-mb payments-content-mobile">
          <span>Your Payments,</span>
          <span>Simplified and Secure</span>
        </div>
        <Button width="277px" style-class="gold" class="payments-title-button"
          >Make a Payment
          <img class="payments-title-arrow" src="@/assets/images/arrow-right.svg" />
        </Button>
      </div>
    </div>
    <img class="yellow-vertical-card" src="@/assets/images/yellow-vertical-card.png" />

    <div class="desc-top-box">
      <h2 class="desc-top">
        <span class="plus">+</span>
        Future-Focused <br />
        Approach
      </h2>
    </div>

    <div class="desc-bottom-box">
      <h2 class="desc-bottom">
        Transforming <br />
        Payments
      </h2>
    </div>
    <div class="tags">
      <div class="tags-top">
        <RoundedTag width="75px">Impact</RoundedTag>
        <RoundedTag width="102px">Creativity</RoundedTag>
      </div>
      <div class="tags-bottom">
        <RoundedTag width="117px">Efficiency</RoundedTag>
        <RoundedTag width="81px">Focused</RoundedTag>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.payments {
  position: relative;
  overflow: hidden;
  height: 926px;
  background: $black;

  .payments-title {
    display: flex;
    align-items: flex-start;
    font-size: 80px;
    width: 778px;
    margin-left: auto;
    color: $light-grey;
    margin-top: 12px;

    &-cube {
      width: 48px;
      height: 48px;
      margin-right: 40px;
      margin-top: 40px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      font-weight: 300;
    }

    &-text {
      display: flex;
      flex-direction: column;
    }

    &-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
  }
}

.vertical-cards {
  max-width: 286.56px;
  max-height: 1431.5px;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  left: 13%;
  top: 0px;
}

.yellow-vertical-card {
  display: none;
}

.yellow-ellipse {
  position: absolute;
  width: 50%;
  min-width: 600px;
  height: 100%;
  z-index: 1;
  top: -8%;
}

.desc-top-box {
  position: absolute;
  right: 125px;
  top: 436px;
}

.desc-top {
  position: relative;
  text-align: center;
  font-size: 28px;

  .plus {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
  }
}

.desc-bottom-box {
  position: absolute;
  right: 327px;
  top: 587px;
}

.desc-bottom {
  position: relative;
  text-align: center;
  font-size: 34px;
}

.tags {
  margin-left: auto;
  margin-right: 322px;
  margin-top: 252px;
  width: 240px;

  &-top {
    display: flex;
    justify-content: flex-end;
    gap: 4px;
  }

  &-bottom {
    margin-top: 8px;
    display: flex;
    gap: 4px;
  }
}

.payments-mb {
  display: none;
}

@media (max-width: $xl) {
  .payments {
    &-title {
      max-width: 530px;
      margin-top: 36px !important;
      &-content {
        font-size: 52px;
      }
    }

    .payments-title {
      width: 100%;
      &-cube {
        width: 32px;
        height: 32px;
        margin-right: 20px;
        margin-top: 26px;
      }
    }
  }

  .desc-bottom {
    &-box {
      right: 297px;
    }
  }

  .tags {
    margin-top: 380px;
    margin-right: 120px;
  }
}

@media (max-width: $md) {
  .payments {
    &-title {
      margin-left: 0px !important;
      padding: 36px 48px 72px 48px;
      max-width: 530px;
      margin-top: 0px !important;
      &-content {
        font-size: 52px;
      }
    }

    .payments-title {
      width: 100%;
      max-width: 100%;

      &-content {
        width: 100%;
      }

      &-button {
        margin-left: auto;
      }
    }
  }

  .vertical-cards {
    display: none;
  }

  .yellow-ellipse {
    display: none;
  }

  .yellow-vertical-card {
    display: block;
    max-width: 280px;
    margin-top: 50px;
  }

  .desc-bottom {
    &-box {
      right: 48px;
      top: 800px;
    }
  }

  .desc-top {
    &-box {
      right: 48px;
      top: 480px;
    }
  }

  .tags {
    position: absolute;
    right: 15%;
    margin-left: 320px;
    margin-right: 0 !important;
    bottom: 200px;
  }
}

@media (max-width: $sm) {
  .payments {
    height: max-content;

    &-title {
      padding: 36px 16px 0px 16px;
      width: 100%;
      &-content {
        font-size: 32px;
      }
    }

    &-content-mobile {
      display: flex !important;
      flex-direction: column;
      text-align: center;
      align-items: center;
      font-size: 8vw;
      margin-bottom: 32px;
    }

    .payments-title {
      &-button {
        margin: 0 auto;
      }
    }
  }

  .yellow-vertical-card {
    display: block;
    transform: translate(-45%) rotate(145deg);
    margin-left: 45%;
    max-width: 220px;
    margin-bottom: 100px;
  }

  .desc-bottom {
    font-size: 28px;
    &-box {
      position: relative;
      bottom: 0;
      top: 0;
      right: 0;
      margin: 0 auto;
      margin-bottom: 32px;
    }
  }

  .desc-top {
    &-box {
      position: relative;
      bottom: 0;
      right: 0;
      top: 0;
      margin: 0 auto;
      margin-bottom: 32px;
    }
  }

  .tags {
    position: relative;
    margin-top: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: 0 auto !important;
    margin-bottom: 64px;
  }

  .payments-dt {
    display: none !important;
  }

  .payments-mb {
    display: block;
  }
}
</style>
