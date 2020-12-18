<template>
  <table class="table table-dark skyrim table-mobile">
    <tbody>
      <tr>
        <td
          colspan="2"
          class="aspect-ratio_3-4"
        >
          <b-img-lazy
            v-if="book.thumbnail !== ''"
            :src="$getAbsoluteImageURL(book.thumbnail.path)"
          />
          <b-img
            v-else
            class="img-fluid"
            blank-color="#333333"
            blank
          />
        </td>
      </tr>
      <!--<tr>
        <th>{{ $t('characters.table.location') }}</th>
        <td>{{ book.stats.location }}</td>
      </tr>-->
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
})
export default class SingleBookTable extends Vue {}
</script>
