<template>
  <div class="proxy-filters">
    <button v-for="(name, type) in server_types" :key="type" :class="{ active: select_server_type.includes(type) }" @click="selectToggle(type)">
      {{ name }}
    </button>
  </div>
  <table class="proxy" v-if="proxy_lists.length">
    <thead>
      <tr>
        <th>#</th>
        <th>名称</th>
        <th>服务</th>
        <th>备注</th>
        <th>地址</th>
        <th>添加时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(proxy, index) in select_proxy_lists" :key="proxy.url">
        <td>{{ index + 1 }}</td>
        <td>{{ proxy.name }}</td>
        <td>{{ proxy.server_types.map((type) => server_types[type] ?? type).join(' / ') }}</td>
        <td>{{ proxy.tagline }}</td>
        <td>{{ proxy.url }}</td>
        <td class="created_at">{{ proxy.created_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
  import { ref, computed } from 'vue'

  const select_server_type = ref([]),
    selectToggle = (type) => {
      if (select_server_type.value.includes(type)) {
        select_server_type.value = select_server_type.value.filter((item) => item !== type)
      } else {
        select_server_type.value.push(type)
      }
    },
    select_proxy_lists = computed(() => {
      if (!select_server_type.value.length) {
        return proxy_lists.value
      }

      return proxy_lists.value.filter((proxy) => select_server_type.value.some((type) => proxy.server_types.includes(type)))
    })

  const proxy_lists = ref([]),
    server_types = ref({}),
    getProxy = async () => {
      let res = await (await fetch('https://emos.best/api/wiki/proxy')).json()
      proxy_lists.value = res.lines
      server_types.value = res.server_types
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

  .proxy-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .proxy-filters button {
    padding: 6px 14px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    cursor: pointer;
  }

  .proxy-filters button.active {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
  }
</style>
