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
        :src="props.armor.thumbnail.path"
        v-if="props.armor.thumbnail !== ''"
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
      <b-card-title>{{ props.armor.title }}</b-card-title>
      <p
        v-if="props.armor.stats.set !== null"
        class="text-success"
      >
        {{ props.armor.stats.set.display }}
      </p>
      <b-table-simple
        dark
        small
      >
        <b-tbody>
          <b-tr class="d-flex align-items-center">
            <b-td>
              <div class="d-flex align-items-center mr-3">
                <img
                  svg-inline
                  class="mr-3"
                  src="@/assets/icons/armor.svg"
                />
                {{ props.armor.stats.resist }}
              </div>
            </b-td>
            <b-td>
              <div class="d-flex align-items-center mr-3">
                <img
                  svg-inline
                  class="mr-3"
                  src="@/assets/icons/coin.svg"
                />
                {{ props.armor.stats.cost }}
              </div>
            </b-td>
            <b-td>
              <div class="d-flex align-items-center">
                <img
                  svg-inline
                  class="mr-3"
                  src="@/assets/icons/weight.svg"
                />
                {{ props.armor.stats.weight }}
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
