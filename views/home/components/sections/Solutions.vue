<script setup>
import Button from '~/global/ui/base/Button.vue'
</script>
<template>
  <section class="solutions">
    <Button class="solutions-btn-top" width="210px">Financial Solutions</Button>
    <h2 class="solutions-title">Seamless Solutions for Every Transaction</h2>
    <img class="solutions-card" src="@/assets/images/white-card.png" />
    <div class="solutions-block-card">
      <img class="solutions-block-card-icon" src="@/assets/images/mini-card.svg" />

      <p class="solutions-block-card-text">Instant Transfers</p>
    </div>

    <div class="solutions-block-payments">
      <img class="solutions-block-payments-icon" src="@/assets/images/mobile-payments.svg" />

      <p class="solutions-block-payments-text">Mobile Payments</p>
    </div>
    <div class="solutions-block-wallet">
      <img class="solutions-block-wallet-icon" src="@/assets/images/wallet.svg" />
      <p class="solutions-block-wallet-text">Multi-Currency Wallet</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.solutions {
  height: 1524px;
  position: relative;
  padding-top: 121px;
  background: url('../../../../assets/images/solution-bg.png') no-repeat center / cover;

  &-title {
    font-size: 74px;
    margin: 0 auto;
    text-align: center;
    width: 1139px;
  }
  &-btn-top {
    margin: 0 auto;
    margin-bottom: 35px;
  }

  &-block {
    &-card {
      padding: 71px 24px 36px 64px;
      position: absolute;
      top: 490px;
      left: calc(50% - 280px);
      transform: translate(-50%);
      font-size: 34px;
      background: url('../../../../assets/images/solution-bg-white-card.png') no-repeat center /
        cover;
      width: 301px;
      height: 301px;

      &-icon {
        margin-bottom: 45px;
      }
    }

    &-payments {
      position: absolute;
      padding: 43px 18px 0 55px;
      width: 253px;
      height: 253px;
      background: url('../../../../assets/images/payments-mobile-bg.png') no-repeat center / cover;
      font-size: 30px;
      bottom: 270px;
      left: calc(50% - 520px);
      transform: translate(-50%);
      &-icon {
        margin-bottom: 45px;
      }
    }

    &-wallet {
      position: absolute;
      padding: 56px 57px 0 45px;
      width: 309px;
      height: 309px;
      background: url('../../../../assets/images/wallet-bg.png') no-repeat center / cover;
      font-size: 30px;
      bottom: 370px;
      right: calc(50% - 740px);
      transform: translate(-50%);
      &-icon {
        margin-bottom: 35px;
      }
    }
  }
  &-card {
    position: absolute;
    left: 50%;
    bottom: 89px;
    transform: translate(-50%);
  }
}

@media (max-width: $xl) {
  .solutions {
    height: 1000px;
    &-title {
      font-size: 52px;
      width: 820px;
    }

    &-card {
      max-width: 280px;
      bottom: 60px;
    }

    &-block {
      &-card {
        width: 200px;
        height: 200px;
        padding: 31px 14px 26px 24px;
        font-size: 28px;
        top: 420px;
        left: calc(50% - 170px);
        &-icon {
          width: 32px;
          margin-bottom: 24px;
        }
      }

      &-payments {
        padding: 13px 18px 0 25px;
        width: 170px;
        height: 170px;
        font-size: 24px;
        bottom: 150px;
        left: calc(50% - 300px);

        &-icon {
          width: 32px;
          margin-bottom: 24px;
        }
      }

      &-wallet {
        width: 230px;
        height: 230px;
        padding: 20px 14px 18px 18px;
        font-size: 28px;
        right: calc(50% - 500px);
        bottom: 170px;

        &-icon {
          width: 32px;
          margin-bottom: 24px;
        }
      }
    }
  }
}

@media (max-width: $md) {
  .solutions {
    height: 900px;
    &-title {
      font-size: 52px;
      width: 620px;
    }

    &-card {
      max-width: 220px;
      bottom: 60px;
    }

    &-block {
      &-card {
        width: 160px;
        height: 160px;
        padding: 16px;
        font-size: 24px;
        top: 430px;
        left: calc(50% - 135px);
        &-icon {
          width: 28px;
          margin-bottom: 18px;
        }
      }

      &-payments {
        padding: 16px;
        width: 150px;
        height: 150px;
        font-size: 20px;
        bottom: 120px;
        left: calc(50% - 200px);

        &-icon {
          width: 28px;
          margin-bottom: 18px;
        }
      }

      &-wallet {
        width: 170px;
        height: 170px;
        padding: 16px;
        font-size: 20px;
        right: calc(50% - 380px);
        bottom: 170px;

        &-icon {
          width: 28px;
          margin-bottom: 18px;
        }
      }
    }
  }
}

@media (max-width: $sm) {
  .solutions {
    height: 650px;
    &-title {
      font-size: 26px;
      width: 290px;
    }

    &-card {
      max-width: 150px;
      bottom: 20px;
    }

    &-block {
      &-card {
        width: 90px;
        height: 90px;
        padding: 12px;
        font-size: 14px;
        top: 360px;
        left: calc(50% - 85px);
        &-icon {
          width: 18px;
          margin-bottom: 8px;
        }
      }

      &-payments {
        padding: 12px;
        width: 90px;
        height: 90px;
        font-size: 12px;
        bottom: 80px;
        left: calc(50% - 120px);

        &-icon {
          width: 18px;
          margin-bottom: 8px;
        }
      }

      &-wallet {
        width: 100px;
        height: 100px;
        padding: 12px;
        font-size: 12px;
        right: calc(50% - 220px);
        bottom: 90px;

        &-icon {
          width: 18px;
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
