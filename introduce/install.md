<!--
title: 安装 
sort: 1
-->

安装十分的简单，如下：

```go get -v -u github.com/chenhg5/go-admin```

### 导入 sql

[https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql)

### 新建或导入自己的业务表

数据库中需要存在自己的业务表，否则下面会出现"no tables"

### 利用命令行工具导出数据模型文件

```
go install github.com/chenhg5/go-admin/admincli

admincli generate
```
