<template>
  <table class="proxy" v-if="proxy_lists.length">
    <thead>
      <tr>
        <th>#</th>
        <th>名称</th>
        <th>备注</th>
        <th>地址</th>
        <th>添加时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(proxy, index) in proxy_lists" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ proxy.name }}</td>
        <td>{{ proxy.tagline }}</td>
        <td>{{ proxy.url }}</td>
        <td class="created_at">{{ proxy.created_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
  import { ref } from 'vue'
  const proxy_lists = ref([]),
    getProxy = async () => {
      proxy_lists.value = await (await fetch('https://emos.best/api/wiki/proxy')).json()
    }
  getProxy()
</script>
<style lang="css">
  .proxy td {
    white-space: nowrap;
  }
  .proxy .created_at {
    font-family: ui-monospace, monospace;
  }
</style>
