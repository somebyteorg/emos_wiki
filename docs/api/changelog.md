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

## 2026-04-09

获取`上传token` `/api/upload/getUploadToken` 中

对于 `图片` `字幕` 暂停了 `r2`类型 增加了 `tusd` 类型

以下罗列的图片类 均有改动 主要删除 `文件ID` 改为 `文件url`

### 商城

- `POST` `/api/shop/seller/update` 删除 `cover` 增加 `cover_url`
- `POST` `/api/shop/product/createOrUpdate` 删除 `cover` 增加 `cover_url`

### 直播

- `GET` `/api/live/list` 删除 `image_poster`
- `POST` `/api/live/list` 删除 `image_poster` 增加 `image_poster_url`

### 片单

- `GET` `/api/watch` 删除 `image_poster`
- `POST` `/api/watch` 删除 `image_poster` 增加 `image_poster_url`

### 红包

- `POST` `/api/redPacket/create` 删除 `file_id`
