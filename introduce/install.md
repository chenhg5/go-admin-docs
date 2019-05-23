<!--
title: 安装 
sort: 1
-->

安装十分的简单，如下：

```go get -v -u github.com/chenhg5/go-admin```

### 导入 sql

[https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql)

### 利用命令行工具导出数据模型文件

```
go install github.com/chenhg5/go-admin/admincli

admincli generate
```
