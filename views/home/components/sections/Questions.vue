<template>
  <section class="faq">
    <div class="faq-header">
      <h1 class="faq-header-title">Frequently Asked Questions</h1>
      <h1 class="faq-header-desc">
        FAQs, short for Frequently Asked Questions, is a section on websites or platforms where
        common questions.
      </h1>
    </div>
    <div class="faq-items">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
        :class="{ 'faq-item-open': isOpen[index] }"
      >
        <div class="faq-question" @click="toggleAnswer(index)">
          <span>{{ faq.question }}</span>
          <div class="faq-question-btn">
            <img
              class="faq-question-angle-icon"
              :class="{ 'faq-question-angle-icon-rotate': isOpen[index] }"
              src="@/assets/images/angle-down.svg"
              alt="toggle"
            />
          </div>
        </div>
        <div class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
    <img class="yellow-ellipse" src="@/assets/images/yellow-ellipse.png" />
    <img class="yellow-ellipse-right" src="@/assets/images/yellow-ellipse-right.png" />
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'What should I do if I forget my password?',
    answer:
      'If you forget your password, you can use the "Forgot Password" feature on the login page to reset it.',
  },
  {
    question: 'Is this service available internationally?',
    answer:
      'Yes, our service is available internationally. Please check our pricing page for more details.',
  },
  {
    question: 'How long does a transaction take?',
    answer:
      'Transactions typically take between 1 to 3 business days, depending on your bank and location.',
  },
  {
    question: 'How long does a transaction take?',
    answer:
      'Transactions typically take between 1 to 3 business days, depending on your bank and location.',
  },
]

const isOpen = ref(faqs.map(() => false))

const toggleAnswer = (index) => {
  isOpen.value[index] = !isOpen.value[index]
}
</script>

<style scoped lang="scss">
.faq {
  padding: 60px 116px;
  position: relative;
  background: $black;
  overflow: hidden;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    margin-bottom: 69px;
    max-width: 1295px;
    &-title {
      font-size: 64px;
      width: 651px;
    }
    &-desc {
      width: 336px;
      font-size: 16px;
    }
  }

  &-items {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  &-item {
    max-width: 1295px;
    width: 100%;
    min-height: 127px;
    border-radius: 60px;
    padding: 52px 39px 44px 42px;
    border: 1px solid #555454;
    background: transparent;
    transition: background 0.3s ease-in-out;
    position: relative;
    margin: auto;

    &-open {
      background: #0e0f0c;
      z-index: 2;
    }
  }

  &-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &-angle-icon {
      transition: transform 0.3s ease-in-out;
      &-rotate {
        transform: rotate(180deg);
      }
    }
  }

  &-answer {
    overflow: hidden;
    max-height: 0;
    margin-top: 12px;
    display: none;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  .faq-item-open .faq-answer {
    display: block !important;
    max-height: 200px;
    opacity: 1;
  }
}

.faq-question-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: $gold;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  z-index: 1;
  right: 34px;
  top: 50%;
  transform: translateY(-50%);
}

.yellow-ellipse {
  position: absolute;
  width: 50%;
  min-width: 600px;
  height: 100%;
  max-height: 851px;
  z-index: 0;
  top: 0;
  left: -15%;
}

.yellow-ellipse-right {
  position: absolute;
  width: 50%;
  min-width: 600px;
  height: 100%;
  max-height: 851px;
  z-index: 0;
  right: -10%;
  top: 0;
}

@media (max-width: $xl) {
  .faq {
    padding: 60px 48px;

    &-header {
      margin: 0;
      margin-bottom: 69px;
      max-width: 100%;
      justify-content: space-between;
      &-title {
        font-size: 52px;
        width: 651px;
      }
      &-desc {
        width: 336px;
        font-size: 16px;
      }
    }
  }
}

@media (max-width: $md) {
  .faq {
    padding: 60px 48px;

    &-header {
      margin: 0;
      margin-bottom: 40px;
      &-title {
        font-size: 32px;
        width: 290px;
      }
      &-desc {
        width: 200px;
        font-size: 12px;
        text-align: center;
      }
    }
  }

  .yellow-ellipse {
    min-width: 400px;
    height: 100%;
    max-height: 551px;
    top: 20px;
    left: -25%;
  }

  .yellow-ellipse-right {
    min-width: 4%;
    height: 100%;
    max-height: 551px;
    top: 20px;
  }

  .faq-question-btn {
    width: 32px;
    height: 32px;
    right: 24px;
  }
}

@media (max-width: $sm) {
  .faq {
    padding: 60px 16px;

    &-header {
      display: flex;
      flex-direction: column;
      gap: 16 px;
      margin-bottom: 40px;
      &-title {
        font-size: 32px;
        text-align: center;
      }
      &-desc {
        width: 240px;
        font-size: 12px;
        text-align: center;
      }
    }

    &-items {
      gap: 16px;
    }

    &-item {
      max-width: 1295px;
      width: 100%;
      min-height: 70px;
      border-radius: 42px;
      padding: 22px 24px 18px 24px;
      font-size: 14px;
    }
  }

  .yellow-ellipse {
    min-width: 300px;
    height: 100%;
    max-height: 451px;
    top: 80px;
    left: -25%;
  }

  .yellow-ellipse-right {
    min-width: 4%;
    height: 100%;
    max-height: 451px;
    top: 320px;
  }
}

.faq-question {
  max-width: calc(100% - 60px);
}

.faq-answer {
  max-width: calc(100% - 60px);
}
</style>
