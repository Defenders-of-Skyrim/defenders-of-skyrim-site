import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $getChangelog(): Promise<any>
    $getMods(): Promise<any>
  }
}
