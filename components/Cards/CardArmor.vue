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
        :src="armor.thumbnail.path"
        v-if="armor.thumbnail !== ''"
        top
      />
      <b-img
        class="card-img img-fluid"
        blank-color="#333333"
        blank
        v-else
      />
    </nuxt-link>

    <b-card-body>
      <b-card-title>{{ armor.title }}</b-card-title>
      <p
        v-if="armor.stats.set !== null"
        class="text-success"
      >
        {{ armor.stats.set.display }}
      </p>
      <table class="table table-dark table-sm">
        <tbody>
          <tr class="d-flex align-items-center">
            <td>
              <div class="d-flex align-items-center mr-3">
                <client-only>
                  <img
                    svg-inline
                    class="mr-3"
                    src="@/assets/icons/armor.svg"
                  >
                  <template slot="placeholder">
                    <img
                      class="mr-3"
                      src="@/assets/icons/armor.svg"
                    >
                  </template>
                </client-only>
                {{ armor.stats.resist }}
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
                {{ armor.stats.cost }}
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
                {{ armor.stats.weight }}
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
    armor: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
})
export default class CardArmor extends Vue {}
</script>
