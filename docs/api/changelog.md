# 更新记录

> 这个是线上接口有重大变化的 需要兼容的

## 2026-03-20

`/api/redPacket/create` 发红包

- 修改 `file_id_image` 为 `file_id`
- 必须带入 `file_type`

## 2026-03-29

`/api/video/media/delete` 删除视频资源

`/api/video/subtitle/delete` 删除视频字幕

删除别人的内容时 必须传入 `reason` 原因

## 2026-03-31

商城 订单 用户层面接口 增加了 `/user` 前缀

`/api/shop/seller/base` 商户基本信息中 如果用户不是商户 修改了返回值 从 `404` 改为了 `status` 值 `default`

`/api/shop/order/user/create` 用户下单时候 购买数量 `buy_number` 必填

`/api/shop/order/shop/update` 移除 商城 更新订单 接口 改为 `更新发货状态` 和 `更新备注` 接口


