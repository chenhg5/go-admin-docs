<!--
title: 安装 (前导准备)
sort: 1
-->

本程序是基于golang，推荐使用版本高于1.11的golang，具体请访问：[https://golang.org](https://golang.org)

### 下载最新版本程序包

```go get -v -u github.com/chenhg5/go-admin```

建议开启```go mod```自动加载依赖，并设置```GOPROXY```为https://goproxy.cn
要保证下载的是最新版本，旧版本可能出现各种问题，具体版本看这里：[https://github.com/chenhg5/go-admin/releases](https://github.com/chenhg5/go-admin/releases)

如果下载依赖包仍存在问题，可直接下载下面的vendor包：
[https://gitee.com/cg33/go-admin/raw/master/vendor/vendor.zip](https://gitee.com/cg33/go-admin/raw/master/vendor/vendor.zip)

### 导入程序所需sql到对应自建数据库中

mysql

[https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql)

sqlite

[https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.db](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.db)

postgresql

[https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.pgsql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.pgsql)

### 新建或导入自己的业务表

数据库中需要存在自己的业务表，否则以下操作会出现"no tables"

### 利用命令行工具导出数据模型文件

安装命令行工具，同时确保```$GOPATH/bin```有在环境变量路径中

```
go install github.com/chenhg5/go-admin/admincli
```

🍺🍺 到这里准备工作完毕~~看快速开始部分

