<template>
  <b-card
    class="mb-3 accordion"
    bg-variant="skyrim"
    text-variant="white"
    no-body
  >
    <b-card-header
      header-tag="header"
      role="tab"
    >
      <b-button
        block
        v-b-toggle.accordion-characters
        variant="skyrim"
      >
        {{ title }}
      </b-button>
    </b-card-header>
    <b-collapse
      id="accordion-characters"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <ul class="list-accordion">
          <li
            v-for="item in data"
            :key="item._id"
          >
            <b-link :to="localePath(item.link)">{{ item.title }}</b-link>
          </li>
        </ul>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    data: {
      type: Array,
      required: true,
      default: '',
    },
  },
})
export default class ListAccordion extends Vue {}
</script>
