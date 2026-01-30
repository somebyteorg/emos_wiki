# 连接

伟大源于一个开放的连接 我们一起玩 `OAUTH`

获取用户的 `user_id` `username` `avatar` 以及 `token` 等信息

可通过 `authorization`: `Bearer [token]` 模式访问公开接口

当用户点击登录时 跳转到这个地址

`https://emos.best/link?uuid=[uuid]&name=[name]&url=[url]`

当用户授权后 系统会跳到 `url` 这个地址中

`[url]?user_id=[user_id]username=[username]&avatar=[avatar]&token=[token]`

- `uuid` 唯一uuid 自己生成
- `name` 应用名称
- `url` 回调地址 如 `https://emos-link.local/`
- `user_id` 用户ID
- `username` 用户名
- `avatar` 用户头像
- `token` 用户token

建议将收到的 `user_id` `username` `avatar` 和 `token` 保存到 `sessionStorage` 中

每次打开浏览器时 重新触发授权操作
