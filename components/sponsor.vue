<template>
  <div class="sponsor">
    <div class="money">
      <p>资金类</p>
      <table>
        <thead>
          <tr>
            <th>时间</th>
            <th>昵称</th>
            <th>金额 (￥{{ moneys.reduce((price, row) => price + row.price, 2).toFixed(2) }})</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="money in moneys">
            <td>{{ money.time }}</td>
            <td>{{ money.name }}</td>
            <td>￥{{ money.price.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="good">
      <p>实物类</p>
      <table>
        <thead>
          <tr>
            <th>时间</th>
            <th>昵称</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="good in goods">
            <td>{{ good.time }}</td>
            <td>{{ good.name }}</td>
            <td>{{ good.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
  const moneys: Array<{
    time: string
    name: string
    price: number
    remark?: string
  }> = [
    // prettier-ignore
    {
      time: '2025/10/08',
      name: 'nayovo',
      price: 30
    },
    {
      time: '2025/10/09',
      name: 'fv',
      price: 100,
    },
    {
      time: '2025/10/17',
      name: 'Beiwang',
      price: 188.88,
      remark: '机器人私聊',
    },
    {
      time: '2025/10/24',
      name: 'Sunuuc',
      price: 10,
    },
    {
      time: '2025/10/29',
      name: 'Sunuuc',
      price: 8.8,
    },
    {
      time: '2025/11/17',
      name: '匿名',
      price: 50,
      remark: '机器人私聊',
    },
    {
      time: '2025/12/21',
      name: '匿名',
      price: 6.66,
      remark: '红包',
    },
    {
      time: '2025/12/21',
      name: '匿名',
      price: 6.66,
      remark: '红包',
    },
    {
      time: '2026/01/05',
      name: 'L W',
      price: 100,
    },
    {
      time: '2026/01/21',
      name: 'liuerao',
      price: 20,
    },
    {
      time: '2026/01/23',
      name: 'qfemby',
      price: 8.88,
    },
    {
      time: '2026/01/23',
      name: '匿名',
      price: 100,
      remark: '私聊',
    },
    {
      time: '2026/01/26',
      name: '匿名',
      price: 88.88,
      remark: '私聊',
    },
    {
      time: '2026/01/30',
      name: '寻见鹿',
      price: 50,
      remark: '私聊',
    },
  ].reverse()

  const goods: Array<{
    time: string
    name: string
    body: string
    remark?: string
  }> = [
    // prettier-ignore
    {
      time: '2025/09/23',
      name: 'yzhazha',
      body: 'od'
    },
    {
      time: '2025/10/02',
      name: '糕手',
      body: '服务器、邮箱',
    },
    {
      time: '2025/10/29',
      name: 'zn存档服',
      body: 'sp、服务器',
    },
    {
      time: '2025/10/31',
      name: 'Herissmon',
      body: 'od',
    },
    {
      time: '2025/11/05',
      name: 'jack_cco',
      body: '服务器',
    },
    {
      time: '2025/12/23',
      name: 'VPS.town',
      body: '服务器',
    },
    {
      time: '2026/01/15',
      name: 'afosne',
      body: 'r2',
    },
    {
      time: '2026/01/24',
      name: '向涯',
      body: '服务器',
    },
    {
      time: '2026/01/25',
      name: 'Wyatt',
      body: 'od',
    },
  ]
</script>
