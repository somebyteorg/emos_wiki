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

