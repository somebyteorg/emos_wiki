# 反代相关

本服欢迎各位大佬反代 也希望您将地址贡献出来

反代域名为 `https://emos.best` 建议反代路径为 `/emby`

## 配置相关

必须增加头部 `EMOS-PROXY-ID` 值为自己的用户ID 如 `eABCDEFGHs`

必须增加头部 `EMOS-PROXY-NAME` 值为自己的称号 如 `@emos`

必须传递头部 `X-FORWARDED-FOR`

必须处理 `206` 视频流状态码 也就是 `Range` 头部

建议缓存 `/emby/Items/*/Images/*` 开头的图片地址

建议缓存 `/emby/System/Ping`

建议对 `/emby/Sessions/Playing/Progress` 节流处理

## 测试相关

### 测试头部是否正常

反代成功后 访问 `/emby/system/ext/proxy/test`

如 `https://emos.proxy/emby/system/ext/proxy/test`

```json
{
  // 只有为 true 时 才会根据使用次数累加萝卜
  "is_bind": false,
  "proxy_id": null,
  // 此处应为你的称号 客户端也会显示出来
  "proxy_name": null,
  // 用户实际访问ip 如果一直不对 请及时反馈
  "ip": "127.0.0.1",
  "ua": "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
}
```

### 测试是否支持206状态码

访问 `/emby/System/Ext/Proxy/TestVideo`

如 `https://emos.proxy/emby/System/Ext/Proxy/TestVideo`

```bash
curl -i -L -H "Range: bytes=0-1" "https://emos.proxy/emby/System/Ext/Proxy/TestVideo"
```

输出类似如下即可

```text
HTTP/2 206
content-range: bytes 0-1/84890474
```

### 测速文件

- https://files.emosstore.sbs/files/speedtest/johann-mouse.mp4
- https://files.emosstore.sbs/files/speedtest/100mb.bin

## 分流相关

本服域名较多，请根据实际情况配置。

- `*.sharepoint.cn`
- `*.sharepoint.com`
- `*.emosstore.sbs`

## 现有反代地址

服务端已支持 [`emby_ext_domains`](https://github.com/uhdnow/emby_ext_domains) 此功能

在支持的播放器中，可以直接进行切换地址使用。

<ClientOnly>
  <proxy/>
</ClientOnly>

<script setup>
import proxy from '../components/proxy.vue'
</script>
