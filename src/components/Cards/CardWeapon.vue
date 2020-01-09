<template functional>
  <b-card
    class="mb-4"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <router-link
      :to="props.link"
      class="aspect-ratio_1-1"
    >
      <b-card-img-lazy
        :src="props.weapon.thumbnail.path"
        v-if="props.weapon.thumbnail !== ''"
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
      <b-card-title>{{ props.weapon.title }}</b-card-title>
      <table class="table table-dark table-sm">
        <tbody>
          <tr class="d-flex align-items-center">
            <td>
              <div class="d-flex align-items-center mr-3">
                <img
                  svg-inline
                  class="mr-3"
                  src="@/assets/icons/sword.svg"
                />
                {{ props.weapon.stats.damage }}
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center mr-3">
                <img
                  svg-inline
                  class="mr-3"
                  src="@/assets/icons/coin.svg"
                />
                {{ props.weapon.stats.cost }}
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center">
                <img
                  svg-inline
                  class="mr-3"
                  src="@/assets/icons/weight.svg"
                />
                {{ props.weapon.stats.weight }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
