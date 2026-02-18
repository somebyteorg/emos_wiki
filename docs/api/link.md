# 连接

伟大源于一个开放的连接 我们一起玩 `OAUTH`

获取用户的 `token` 信息

可通过 `authorization`: `Bearer [token]` 模式访问公开接口

## 网页授权

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

## 机器人授权

- https://core.telegram.org/api/links#bot-links

当用户点击登录时 跳转到这个地址

`https://t.me/emospg_bot?start=link_[自己的用户ID]-[机器人的name]`

如 `https://t.me/emospg_bot?start=link_eABCDEFGHs-emos_test_bot`

当用户同意或拒绝时候 均会跳回到对应机器人

可用 `emosLinkAgree` 和 `emosLinkRefuse` 进行判断

### 同意

`https://t.me/[机器人的name]?start=emosLinkAgree-[用户token]`

如 `https://t.me/emos_test_bot?start=emosLinkAgree-11_AkJO2UdOKinqmKOU`

### 拒绝

`https://t.me/[机器人的name]?start=emosLinkRefuse-[TelegramID]`

如 `https://t.me/emos_test_bot?start=emosLinkRefuse-8129903593`
