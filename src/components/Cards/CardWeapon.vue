<template>
  <b-card
    class="mb-4"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <router-link
      :to="link"
      class="aspect-ratio_1-1"
    >
      <b-card-img-lazy
        :src="weapon.thumbnail.path"
        v-if="weapon.thumbnail !== ''"
        top
      />
      <b-img
        class="card-img img-fluid"
        blank-color="#333333"
        blank
        v-else
      />
    </router-link>

    <b-card-body>
      <b-card-title>{{ weapon.title }}</b-card-title>
      <b-table-simple
        dark
        small
      >
        <b-tbody>
          <b-tr class="d-flex align-items-center">
            <b-td>
              <div
                class="d-flex align-items-center mr-3"
                title="Базовый урон"
                v-b-tooltip.hover
              >
                <b-img
                  class="mr-3"
                  src="@/assets/icons/sword.svg"
                />
                {{ weapon.stats.damage }}
              </div>
            </b-td>
            <b-td>
              <div
                class="d-flex align-items-center mr-3"
                title="Стоимость"
                v-b-tooltip.hover
              >
                <b-img
                  class="mr-3"
                  src="@/assets/icons/coin.svg"
                />
                {{ weapon.stats.cost }}
              </div>
            </b-td>
            <b-td>
              <div
                class="d-flex align-items-center"
                title="Вес"
                v-b-tooltip.hover
              >
                <b-img
                  class="mr-3"
                  src="@/assets/icons/weight.svg"
                />
                {{ weapon.stats.weight }}
              </div>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    weapon: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
})
export default class CardWeapon extends Vue {}
</script>
