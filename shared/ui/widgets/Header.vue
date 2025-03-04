<script setup>
import { ref } from 'vue'
import Button from '../base/Button.vue'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-logo">LOGO</div>

    <nav class="header-nav" :class="{ open: isMenuOpen }">
      <ul class="header-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Cards</a></li>
        <li><a href="#">Services</a></li>
      </ul>
      <!-- Кнопки внутри бургер-меню, но не в ul -->
      <div class="menu-buttons">
        <Button width="106px">Sign in</Button>
        <Button width="120px" style-class="gold">Get Started</Button>
      </div>
    </nav>

    <div class="header-buttons">
      <!-- Кнопки для десктопа -->
      <Button class="header-buttons-item" width="106px">Sign in</Button>
      <Button class="header-buttons-item" width="120px" style-class="gold">Get Started</Button>

      <!-- Кнопка бургер-меню -->
      <input type="checkbox" id="burger-checkbox" class="burger-checkbox" v-model="isMenuOpen" />
      <label class="burger" for="burger-checkbox"></label>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  padding: 25px 109px 0 109px;
  background: transparent;
  position: relative;

  &-nav {
    margin-left: 260px;
    max-width: 394px;
    width: 100%;
  }

  &-list {
    display: flex;
    justify-content: space-between;
    width: 100%;

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }

  &-buttons {
    display: flex;
    align-items: center;
    margin-left: 60px;
    gap: 15px;
  }
}

.menu-buttons {
  display: none;
}

/* Стили для бургер-меню */
.burger-checkbox {
  display: none;
}

.burger {
  display: none;
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 26px;
  margin-left: auto;
  border: none;
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: $gold;
  left: 0;
}

.burger::before {
  top: 0;
  box-shadow: 0 11px 0 #000;
  transition:
    box-shadow 0.3s 0.15s,
    top 0.3s 0.15s,
    transform 0.3s;
}

.burger::after {
  bottom: 0;
  transition:
    bottom 0.3s 0.15s,
    transform 0.3s;
}

/* Бургер-меню анимация */
.burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: none;
}

.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
}

/* Брейкпоинт для мобильных */
@media (max-width: $xl) {
  .header {
    padding: 25px 48px 0 48px;
    &-nav {
      margin-left: 360px;
    }
  }

  /* Бургер-меню */
  .burger {
    display: block;
    z-index: 20;
  }

  .header-nav {
    position: fixed;
    top: 0;
    right: -100%;
    background: $black;
    z-index: 20;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 1);

    &.open {
      right: 0;
    }
  }

  .header-list {
    flex-direction: column;
    padding: 16px;
    width: 100%;

    li {
      padding: 12px 0;
      text-align: center;
      width: 100%;
    }

    a {
      display: block;
      width: 100%;
      padding: 12px 0;
      color: white;
      font-size: 18px;
    }
  }

  .burger-checkbox:checked ~ .header-nav {
    right: 0;
  }


}

@media (max-width: $sm) {
  /* Скрываем кнопки на мобильных */
  .header-buttons-item {
    display: none;
  }

  .header-buttons {
    display: flex;
    align-items: center;
  }

  .menu-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 24px;
  }

  .menu-buttons button {
    width: 100%;
    max-width: 180px;
    margin: 0 auto;
  }
}
</style>
