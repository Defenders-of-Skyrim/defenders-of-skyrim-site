<template>
  <div class="navbar-container">
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-navbar
            toggleable="lg"
            type="dark"
          >
            <b-navbar-brand to="/">
              <b-img-lazy src="@/assets/images/logo.svg" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item-dropdown
                  text="Персонажи"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="characters" header="Типы персонажей">
                    <b-dropdown-item to="/about">Напарники</b-dropdown-item>
                    <b-dropdown-item to="/about">Учителя навыков</b-dropdown-item>
                    <b-dropdown-item to="/about">Торговцы</b-dropdown-item>
                    <b-dropdown-item to="/about">Питомцы</b-dropdown-item>
                    <b-dropdown-item to="/about">Прочие персонажи</b-dropdown-item>
                  </b-dropdown-group>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                  class="columns"
                  text="Предметы"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="apparel-weapons" header="Оружие">
                    <b-dropdown-item to="/about">Одноручное</b-dropdown-item>
                    <b-dropdown-item to="/about">Двуручное</b-dropdown-item>
                    <b-dropdown-item to="/about">Стрелковое</b-dropdown-item>
                    <b-dropdown-item to="/about">Посохи</b-dropdown-item>
                  </b-dropdown-group>
                  <b-dropdown-group id="apparel-armor" header="Доспехи">
                    <b-dropdown-item to="/about">Легкие</b-dropdown-item>
                    <b-dropdown-item to="/about">Тяжелые</b-dropdown-item>
                    <b-dropdown-item to="/about">Одежда</b-dropdown-item>
                  </b-dropdown-group>
                  <b-dropdown-item to="/about">Артефакты</b-dropdown-item>
                  <b-dropdown-item to="/about">Аксессуары</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                  text="Магия"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="apparel-magic" header="Школы магии">
                    <b-dropdown-item to="/about">Восстановление</b-dropdown-item>
                    <b-dropdown-item to="/about">Иллюзия</b-dropdown-item>
                    <b-dropdown-item to="/about">Изменение</b-dropdown-item>
                    <b-dropdown-item to="/about">Колдовство</b-dropdown-item>
                    <b-dropdown-item to="/about">Разрушение</b-dropdown-item>
                  </b-dropdown-group>
                  <b-dropdown-item to="/about">Активные эффекты</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                  text="Локации"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="locations" header="Страны / миры">
                    <b-dropdown-item to="/about">Греция</b-dropdown-item>
                    <b-dropdown-item to="/about">Египет</b-dropdown-item>
                    <b-dropdown-item to="/about">Преисподняя</b-dropdown-item>
                    <b-dropdown-item to="/about">Штаб Защитников Скайрима</b-dropdown-item>
                  </b-dropdown-group>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown
                  text="Квесты"
                  lazy
                  no-caret
                >
                  <b-dropdown-group id="quests" header="Типы заданий">
                    <b-dropdown-item to="/about">Главные</b-dropdown-item>
                    <b-dropdown-item to="/about">Побочные</b-dropdown-item>
                    <b-dropdown-item to="/about">Задания напарников</b-dropdown-item>
                    <b-dropdown-item to="/about">Задания Штаба Защитников Скайрима</b-dropdown-item>
                  </b-dropdown-group>
                </b-nav-item-dropdown>
                <b-nav-item to="/download">Скачать мод</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Navbar extends Vue {}
</script>
