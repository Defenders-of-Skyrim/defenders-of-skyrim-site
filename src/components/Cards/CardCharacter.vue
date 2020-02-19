<template functional>
  <b-card
    class="mb-4"
    :class="{'card-draft': props.character.status === 'Draft'}"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <router-link
      :to="props.link"
      class="aspect-ratio_3-4"
    >
      <b-card-img-lazy
        :src="props.character.thumbnail.path"
        v-if="props.character.thumbnail !== ''"
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
      <b-card-title>{{ props.character.title }}</b-card-title>
      <p>
        {{ parent.$t('characters.universe', {
          class: props.character.stats.class,
          universe: props.character.universe,
        }) }}
      </p>
      <table class="table table-dark table-sm">
        <tbody>
          <tr class="d-flex align-items-center">
            <td v-if="props.character.stats.followable === true">
              <div class="d-flex align-items-center mr-1">
                <img
                  svg-inline
                  src="@/assets/icons/follower.svg"
                />
              </div>
            </td>
            <td v-if="props.character.stats.hireable === true">
              <div class="d-flex align-items-center mr-1">
                <img
                  svg-inline
                  src="@/assets/icons/hireling.svg"
                />
              </div>
            </td>
            <td v-if="props.character.stats.marriable === true">
              <div class="d-flex align-items-center">
                <img
                  svg-inline
                  src="@/assets/icons/marriage.svg"
                />
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
    character: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
})
export default class CardCharacter extends Vue {}
</script>
