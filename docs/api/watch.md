# 片单

> 媒体库的另一种叫法

动态更新的片单 类似于 `top250` `每日热榜等` `每周必看等`

请对外提供一个 `GET` 的接口

如 `https://emos.local/watch/dynamic`

返回格式如下

emos服务将于每日 `8点` `17点` 定时抓取

```json
{
    // 片单标题 1-50字内
    "name": "热门电影"
    // 自己提供的封面图地址
    "cover": "https://emos.local/image.png"
    // 内容更新时间
    "updated_at": "2026-01-28 11:22:33",
    "videos": [
        {
            "tmdb_id": 1024,
            "tmdb_type": "tv",
            "title": "电视标题",
            // 排序 1-100 越小约靠前
            "sort": 100
        },
        {
            "tmdb_id": 2048,
            "tmdb_type": "movie",
            "title": "电影标题",
            "sort": 100
        }
    ]
}
```
