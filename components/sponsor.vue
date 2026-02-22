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
            <td
              :style="{
                'text-decoration': good.is_expire ? 'line-through' : 'none',
              }"
            >
              {{ good.body }}
            </td>
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
    {
      time: '2026/01/31',
      name: '澤子戲',
      price: 50,
      remark: '私聊',
    },
    {
      time: '2026/02/01',
      name: '黑白灰',
      price: 100,
      remark: '私聊',
    },
    {
      time: '2026/02/02',
      name: '匿名',
      price: 50,
      remark: '私聊',
    },
    {
      time: '2026/02/03',
      name: '愿望实行',
      price: 20,
      remark: '私聊',
    },
    {
      time: '2026/02/07',
      name: 'Y1025',
      price: 8.88,
      remark: '私聊',
    },
    {
      time: '2026/02/08',
      name: 'Y1025',
      price: 10,
      remark: '私聊',
    },
    {
      time: '2026/02/09',
      name: 'chenbai28',
      price: 12.88,
      remark: '私聊',
    },
    {
      time: '2026/02/09',
      name: '鲨鱼辣椒',
      price: 15,
      remark: '私聊',
    },
    {
      time: '2026/02/09',
      name: 'tiger998',
      price: 20,
      remark: '私聊',
    },
    {
      time: '2026/02/12',
      name: '北凉柿子 徐凤年',
      price: 30,
      remark: '私聊',
    },
    {
      time: '2026/02/14',
      name: '好纠结的小晟狄',
      price: 30,
      remark: '私聊',
    },
    {
      time: '2026/02/14',
      name: '冉',
      price: 10,
      remark: '私聊',
    },
    {
      time: '2026/02/14',
      name: 'yellowflash',
      price: 28.88,
      remark: '私聊',
    },
    {
      time: '2026/02/14',
      name: '小白',
      price: 30,
      remark: '私聊',
    },
    {
      time: '2026/02/15',
      name: '落雨',
      price: 88,
      remark: '私聊',
    },
    {
      time: '2026/02/16',
      name: 'Josh',
      price: 100,
      remark: '私聊',
    },
    {
      time: '2026/02/16',
      name: 'Stein',
      price: 10,
      remark: '私聊',
    },
    {
      time: '2026/02/16',
      name: 'ozymandias',
      price: 2,
      remark: '私聊',
    },
    {
      time: '2026/02/16',
      name: 'cherrycarol',
      price: 50,
      remark: '私聊',
    },
    {
      time: '2026/02/17',
      name: 'fei foi',
      price: 28.8,
      remark: '私聊',
    },
    {
      time: '2026/02/17',
      name: '落雨',
      price: 154,
      remark: '私聊',
    },
    {
      time: '2026/02/17',
      name: 'numb',
      price: 30,
      remark: '私聊',
    },
    {
      time: '2026/02/18',
      name: 'deathvader',
      price: 10,
      remark: '私聊',
    },
    {
      time: '2026/02/18',
      name: '好纠结的小晟狄',
      price: 30,
      remark: '私聊',
    },
    {
      time: '2026/02/18',
      name: '尊非',
      price: 20,
      remark: '私聊',
    },
    {
      time: '2026/02/18',
      name: 'sunshine_0506',
      price: 10,
      remark: '私聊',
    },
    {
      time: '2026/02/18',
      name: 'xzc_cccc',
      price: 9.99,
      remark: '私聊',
    },
    {
      time: '2026/02/18',
      name: '阿里嘎多美羊羊桑',
      price: 100,
      remark: '私聊',
    },
    {
      time: '2026/02/19',
      name: '史迪仔',
      price: 100,
      remark: '机器人私聊',
    },
    {
      time: '2026/02/19',
      name: '落雨',
      price: 88,
      remark: '私聊',
    },
    {
      time: '2026/02/21',
      name: '匿名',
      price: 28.88,
      remark: '转私聊',
    },
    {
      time: '2026/02/22',
      name: '匿名',
      price: 18.88,
      remark: '机器人私聊',
    },
    {
      time: '2026/02/22',
      name: 'liuerao',
      price: 10,
      remark: '私聊',
    },
  ].reverse()

  const goods: Array<{
    time: string
    name: string
    body: string
    remark?: string
    is_expire?: boolean
  }> = [
    // prettier-ignore
    {
      time: '2025/09/23',
      name: 'yzhazha',
      body: 'od',
      is_expire: true,
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
      time: '2026/01/24',
      name: 'lemon',
      body: 'od',
    },
    {
      time: '2026/01/25',
      name: 'Wyatt',
      body: 'od',
      is_expire: true,
    },
    {
      time: '2026/02/10',
      name: 'kiyukie',
      body: 'sp',
    },
    {
      time: '2026/02/12',
      name: 'CapyPlayer 播放器',
      body: '5终身、5年度',
    },
    {
      time: '2026/02/12',
      name: 'EplayerX 播放器',
      body: '2终身、5年度、5月度',
    },
    {
      time: '2026/02/12',
      name: 'Hills 播放器',
      body: '2终身',
    },
    {
      time: '2026/02/12',
      name: 'VidHub 播放器',
      body: '5终身、5年度、3月度',
    },
    {
      time: '2026/02/12',
      name: '某知名播放器',
      body: '2、1、1',
    },
    {
      time: '2026/02/12',
      name: 'Rodel Player 播放器',
      body: '5终身',
    },
    {
      time: '2026/02/12',
      name: 'AfuseKt 播放器',
      body: '1永久PRO、10永久',
    },
    {
      time: '2026/02/12',
      name: 'Forward 播放器',
      body: '3终身',
    },
    {
      time: '2026/02/13',
      name: '某知名播放器',
      body: '3PRO',
    },
    {
      time: '2026/02/13',
      name: '某知名播放器',
      body: '1永久、3年度',
    },
    {
      time: '2026/02/13',
      name: 'ongt',
      body: 'gd',
    },
    {
      time: '2026/02/13',
      name: 'rueben',
      body: 'gd',
    },
    {
      time: '2026/02/16',
      name: 'Hector',
      body: 'gd',
    },
    {
      time: '2026/02/17',
      name: '保安',
      body: 'gd',
    },
  ]
</script>
