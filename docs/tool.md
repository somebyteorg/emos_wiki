# 工具

## docker chromium 浏览器

by @laizer

```yaml
services:
  chromium:
    image: linuxserver/chromium:latest
    container_name: chromium
    environment:
      - PUID=0
      - PGID=0
      - CUSTOM_PORT=3033
      - CUSTOM_HTTPS_PORT=3034
      - TZ=Asia/Shanghai
      - CUSTOM_USER=xxxxxxxxxxxxxxxxx
      - PASSWORD=xxxxxxxxxxxxxxxx
      - FILE_MANAGER_PATH=/qbittorrent
      - LC_ALL=zh_CN.UTF-8
    volumes:
      - ./config:/config
      - /opt/qbittorrent:/qbittorrent
    ports:
#      - 3033:3033
      - 3034:3034
    shm_size: "2gb"
    restart: always
    network_mode: bridge
```
