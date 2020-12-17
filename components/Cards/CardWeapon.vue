<template>
  <b-card
    class="mb-4"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <nuxt-link
      :to="localePath(link)"
      class="aspect-ratio_1-1"
    >
      <b-card-img-lazy
        v-if="weapon.thumbnail !== ''"
        :src="$getAbsoluteImageURL(weapon.thumbnail.path)"
        top
      />
      <b-img
        v-else
        class="card-img img-fluid"
        blank-color="#333333"
        blank
      />
    </nuxt-link>

    <b-card-body>
      <b-card-title>{{ weapon.title }}</b-card-title>
      <table class="table table-dark table-sm">
        <tbody>
          <tr class="d-flex align-items-center">
            <td>
              <div class="d-flex align-items-center mr-3">
                <client-only>
                  <img
                    svg-inline
                    class="mr-3"
                    src="@/assets/icons/sword.svg"
                  >
                  <template slot="placeholder">
                    <img
                      class="mr-3"
                      src="@/assets/icons/sword.svg"
                    >
                  </template>
                </client-only>
                {{ weapon.stats.damage }}
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center mr-3">
                <client-only>
                  <img
                    svg-inline
                    class="mr-3"
                    src="@/assets/icons/coin.svg"
                  >
                  <template slot="placeholder">
                    <img
                      class="mr-3"
                      src="@/assets/icons/coin.svg"
                    >
                  </template>
                </client-only>
                {{ weapon.stats.cost }}
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center">
                <client-only>
                  <img
                    svg-inline
                    class="mr-3"
                    src="@/assets/icons/weight.svg"
                  >
                  <template slot="placeholder">
                    <img
                      class="mr-3"
                      src="@/assets/icons/weight.svg"
                    >
                  </template>
                </client-only>
                {{ weapon.stats.weight }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

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
