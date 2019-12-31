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
              <b-img-lazy
                src="@/assets/images/logo.svg"
              />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item to="/about">Персонажи</b-nav-item>
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
                  <b-dropdown-item to="/about">Аксессуары</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="/about">Магия</b-nav-item>
                <b-nav-item to="/about">Локации</b-nav-item>
                <b-nav-item to="/about">Квесты</b-nav-item>
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
