<!--
title: GoAdmin
layout: IndexLayout
visible: true
-->

<style>
body, html { background: #fff; }
.markdown{ padding: 0 20px; }
.jumbotron {
  position: absolute;
  background-color: #383838;
  top: 56px;
  left: 0;
  right: 0;
  padding-top: 80px;
  min-height: 380px;
  color: #c1c1c1;
}
.jumbotron-block { min-height: 400px; }
.jumbotron-warpper {
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
}
.jumbotron-title {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
}
.jumbotron-des {
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 30px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.jumbotron .jumbotron-btn {
  display: inline-block;
  color: #333;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #fff;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.jumbotron-btn:hover {
  background-color: #bbb;
  color: #333;
}
.jumbotron-btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}
</style>
<div class="jumbotron">
  <div class="jumbotron-warpper">
    <div class="jumbotron-title">GoAdmin </div>
    <div class="jumbotron-des">GoAdmin 可以帮助你的golang应用快速实现数据可视化，搭建一个数据管理平台。</div>
    <a class="jumbotron-btn" href="#/introduce/init-project">快速开始</a>
  </div>
</div>
<div class="jumbotron-block"> </div>

## 特征

- 使用adminlte构建的漂亮的管理界面
- 大量插件供使用
- 完善的认证系统
- 支持多个web框架：gin, beego, echo...

## 使用

详见 [文档说明](https://github.com/chenhg5/go-admin/blob/master/docs/cn/index.md)

### 安装

```go get -v -u github.com/chenhg5/go-admin```

### 导入 sql

[https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql)

### 利用命令行工具导出数据模型文件

```
go install github.com/chenhg5/go-admin/admincli

admincli generate -h=127.0.0.1 -p=3306 -P=root -n=godmin -pa=main -o=./model
```

### Gin 例子

```go
package main

import (
  "github.com/gin-gonic/gin"
  _ "github.com/chenhg5/go-admin/adapter/gin"
  "github.com/chenhg5/go-admin/engine"
  "github.com/chenhg5/go-admin/plugins/admin"
  "github.com/chenhg5/go-admin/modules/config"
  "github.com/chenhg5/go-admin/examples/datamodel"
)

func main() {
  r := gin.Default()

  eng := engine.Default()

  // global config
  cfg := config.Config{
    DATABASE: []config.Database{
        {
      HOST:         "127.0.0.1",
      PORT:         "3306",
      USER:         "root",
      PWD:          "root",
      NAME:         "godmin",
      MAX_IDLE_CON: 50,
      MAX_OPEN_CON: 150,
      DRIVER:       "mysql",
        },
          },
    DOMAIN: "localhost", // 是cookie相关的，访问网站的域名
    PREFIX: "admin",
    // STORE 必须设置且保证有写权限，否则增加不了新的管理员用户
    STORE: config.Store{
        PATH:   "./uploads",
        PREFIX: "uploads",
    },
    LANGUAGE: "cn", 
    // 开发模式
                DEBUG: true,
                // 日志文件位置，需为绝对路径
                INFOLOG: "/var/logs/info.log",
                ACCESSLOG: "/var/logs/access.log",
                ERRORLOG: "/var/logs/error.log",
  }

      // Generators： 详见 https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/tables.go
  adminPlugin := admin.NewAdmin(datamodel.Generators)

  eng.AddConfig(cfg).AddPlugins(adminPlugin).Use(r)

  r.Run(":9033")
}
```

其他例子: [https://github.com/chenhg5/go-admin/tree/master/examples](https://github.com/chenhg5/go-admin/tree/master/examples)

## 技术支持

- [adminlte](https://adminlte.io/themes/AdminLTE/index2.html)

## 贡献

非常欢迎提pr，<strong>这里可以加入开发小组</strong>

QQ群: 756664859，记得备注加群来意

这里是[开发计划](https://github.com/chenhg5/go-admin/projects)

## 十分感谢

inspired by [laravel-admin](https://github.com/z-song/laravel-admin)
