# 临时文件

> 类似于图床 不过是[`易失`](https://github.com/somebyteorg/emos_temporary)的

可用于 `发红包` 的资源

## 请求

```bash
curl --location 'https://temporary.emos.best/upload' \
--form 'file="[file]"' \
--form 'emos_id="[emos_id]"'
```

- file 要上传的文件 `80m` 内
- emos_id 当前的用户ID

## 响应

将直接返回直链地址

```json
{
    "url": "https://temporary.emos.best/files/26/04/07/exxs/883480543000c6c5.m4a"
}
```
