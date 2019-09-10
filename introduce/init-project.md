<!--
title: 快速开始 
sort: 2
-->

go-admin通过各种适配器使得你在各个web框架中使用都十分的方便。目前支持的web框架有：

- [gin](http://github.com/gin-gonic/gin)
- [beego](https://github.com/astaxie/beego)
- [fasthttp](https://github.com/valyala/fasthttp)
- [buffalo](https://github.com/gobuffalo/buffalo)
- [echo](https://github.com/labstack/echo)
- [gorilla/mux](http://github.com/gorilla/mux)
- [iris](https://github.com/kataras/iris)

你可以选择你拿手的或者业务项目正在用的框架开始，如果上述没有你喜欢的框架，欢迎给我们提issue或pr！

下面以gin这个框架为例子，演示搭建过程。

## main.go

在你的项目文件夹下新建一个```main.go```文件，内容如下：

```go
package main

import (
	_ "github.com/chenhg5/go-admin/adapter/gin" // 引入适配器，必须引入，如若不引入，则需要自己定义
	"github.com/chenhg5/go-admin/engine"
	"github.com/chenhg5/go-admin/examples/datamodel"
	"github.com/chenhg5/go-admin/modules/config"
	"github.com/chenhg5/go-admin/plugins/admin"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// 实例化一个go-admin引擎对象
	eng := engine.Default()

	// go-admin全局配置，也可以写成一个json，通过json引入
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
		PREFIX: "admin", // 访问网站的前缀
		// STORE 必须设置且保证有写权限，否则增加不了新的管理员用户
		STORE: config.Store{
			PATH:   "./uploads",
			PREFIX: "uploads",
		},
		LANGUAGE: "cn",
	}

	// 这里引入你需要管理的业务表配置
	// 关于Generators，详见 https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/tables.go
	adminPlugin := admin.NewAdmin(datamodel.Generators)

	// 增加配置与插件，使用Use方法挂载到Web框架中
	_ = eng.AddConfig(cfg).AddPlugins(adminPlugin).Use(r)

	_ = r.Run(":9033")
}
```

请留意以上代码与注释，对应的步骤都加上了注释，使用十分简单，只需要：

- 引入适配器
- 设置全局的配置项
- 初始化插件
- 设置插件与配置
- 挂载到Web框架中

接着执行```go run main.go```运行代码，访问：[http://localhost:9033/admin/login](http://localhost:9033/admin/login)
默认登录账号：admin
默认登录密码：admin

</br>

更多框架的例子可以看：[https://github.com/chenhg5/go-admin/tree/master/examples](https://github.com/chenhg5/go-admin/tree/master/examples)

## 添加自己的业务表进行管理

详见：
1 [插件的使用](http://doc.go-admin.cn/#/introduce/plugins/plugins)
2 [Admin插件使用](http://doc.go-admin.cn/#/introduce/plugins/admin)

## 全局配置项说明

[https://github.com/chenhg5/go-admin/blob/master/modules/config/config.go](https://github.com/chenhg5/go-admin/blob/master/modules/config/config.go)

```go
package config

import (
	"html/template"
)

type Database struct {
	HOST         string
	PORT         string
	USER         string
	PWD          string
	NAME         string
	MAX_IDLE_CON int
	MAX_OPEN_CON int
	DRIVER       string

	FILE string
}

type DatabaseList map[string]Database

type Store struct {
	PATH   string
	PREFIX string
}

type Config struct {
	// 数据库配置
	DATABASE DatabaseList

	// 登录域名
	DOMAIN string

	// 网站语言
	LANGUAGE string

	// 全局的管理前缀
	PREFIX string

	// 主题名
	THEME string

	// 上传文件存储的位置
	STORE Store

	// 网站的标题
	TITLE string

	// 侧边栏上的Logo
	LOGO template.HTML

	// 侧边栏上的Logo缩小版
	MINILOGO template.HTML

	// 登录后跳转的路由
	INDEX string

	// 是否开始debug模式
	DEBUG bool

	// Info日志路径
	INFOLOG string

	// Error log日志路径
	ERRORLOG string

	// Access log日志路径
	ACCESSLOG string

	// 是否开始数据库Sql操作日志
	SQLLOG bool

	// 网站颜色主题
	COLORSCHEME string
}

```
