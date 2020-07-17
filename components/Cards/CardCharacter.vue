<template>
  <b-card
    class="mb-4"
    :class="{'card-draft': character.status === 'Draft'}"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <nuxt-link
      :to="localePath(link)"
      class="aspect-ratio_3-4"
    >
      <b-card-img-lazy
        v-if="character.thumbnail !== ''"
        :src="$getAbsoluteImageURL(character.thumbnail.path)"
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
      <b-card-title>{{ character.title }}</b-card-title>
      <p>
        {{ $t('characters.universe', {
          class: character.stats.class,
          universe: character.universe,
        }) }}
      </p>
      <table class="table table-dark table-sm">
        <tbody>
          <tr class="d-flex align-items-center">
            <td v-if="character.stats.followable === true">
              <div class="d-flex align-items-center mr-1">
                <client-only>
                  <img
                    svg-inline
                    class="mr-3"
                    src="@/assets/icons/follower.svg"
                  >
                  <template slot="placeholder">
                    <img
                      class="mr-3"
                      src="@/assets/icons/follower.svg"
                    >
                  </template>
                </client-only>
              </div>
            </td>
            <td v-if="character.stats.hireable === true">
              <div class="d-flex align-items-center mr-1">
                <client-only>
                  <img
                    svg-inline
                    class="mr-3"
                    src="@/assets/icons/hireling.svg"
                  >
                  <template slot="placeholder">
                    <img
                      class="mr-3"
                      src="@/assets/icons/hireling.svg"
                    >
                  </template>
                </client-only>
              </div>
            </td>
            <td v-if="character.stats.marriable === true">
              <div class="d-flex align-items-center">
                <client-only>
                  <img
                    svg-inline
                    class="mr-3"
                    src="@/assets/icons/marriage.svg"
                  >
                  <template slot="placeholder">
                    <img
                      class="mr-3"
                      src="@/assets/icons/marriage.svg"
                    >
                  </template>
                </client-only>
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
