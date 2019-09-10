<!--
title: Admin插件使用 
sort: 2
-->

admin插件可以帮助你实现快速生成数据库数据表增删改查的Web数据管理平台。

## 快速开始

需要如下几步：

- 生成数据表对应的配置文件
- 设置访问路由
- 初始化，并在引擎中加载
- 设置访问菜单

### 生成配置文件

假设你的数据库里面有一个数据表users，如：

```sql
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` tinyint(4) DEFAULT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

使用自带的命令行工具可以帮助你快速生成配置文件，如：

- 安装

```bash
go install github.com/chenhg5/go-admin/admincli
```

- 生成

<br>
在项目文件夹下执行

```bash
admincli generate
```

根据提示填写信息，运行完之后，会生成一个文件```users.go```，这个就是对应数据表的配置文件了，关于如何配置，在后面详细介绍。

### 设置访问路由

生成完配置文件后，同时也会生成一个路由配置文件```tables.go```，如：

```go
package main

import "github.com/chenhg5/go-admin/plugins/admin/models"

// The key of Generators is the prefix of table info url.
// The corresponding value is the Form and Table data.
//
// http://{{config.DOMAIN}}:{{PORT}}/{{config.PREFIX}}/info/{{key}}
//
// example:
//
// "posts"   => http://localhost:9033/admin/info/posts
// "authors" => http://localhost:9033/admin/info/authors
//
var Generators = map[string]models.TableGenerator{
	"user":    GetUserTable,
}
```

其中，```"user"```就是对应的访问路由前缀，```GetUserTable```就是表格数据生成方法。
对应的访问路由地址就是：http://localhost:9033/admin/info/users

### 初始化，并在引擎中加载

初始化，需要调用```NewAdmin```方法，然后将上面的```Generators```传进去即可。然后再调用引擎的```AddPlugins```方法加载引擎。

```go
package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/chenhg5/go-admin/adapter/gin" // 必须引入，如若不引入，则需要自己定义
	"github.com/chenhg5/go-admin/engine"
	"github.com/chenhg5/go-admin/plugins/admin"
	"github.com/chenhg5/go-admin/modules/config"
	"github.com/chenhg5/go-admin/modules/language"
)

func main() {
	r := gin.Default()
	eng := engine.Default()
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
		LANGUAGE: language.CN,
	}

	adminPlugin := admin.NewAdmin(Generators)

	// 也可以调用 AddGenerator 方法加载
	// adminPlugin.AddGenerator("user", GetUserTable)
	
	eng.AddConfig(cfg).
		AddPlugins(adminPlugin).  // 加载插件
		Use(r)

	r.Run(":9033")
}
```

### 设置访问菜单

运行起来后，访问登录网址，进入到菜单管理页面，设置好数据表的管理菜单就可以在侧边栏中进入了。

> 注：
>
> 在以上例子中，登录网址为：http://localhost:9033/admin/login
>
> 菜单管理页面为：http://localhost:9033/admin/menu

## 业务数据表生成方法文件介绍

```go
package main

import (
	"github.com/chenhg5/go-admin/template/types"
	"github.com/chenhg5/go-admin/plugins/admin/models"
)

func GetUsersTable() (usersTable models.Table) {

	userTable = models.NewDefaultTable(models.DefaultTableConfig)
	usersTable.GetInfo().FieldList = []types.Field{}

	usersTable.GetInfo().Table = "users"
	usersTable.GetInfo().Title = "Users"
	usersTable.GetInfo().Description = "Users"

	usersTable.GetForm().FormList = []types.Form{}

	usersTable.GetForm().Table = "users"
	usersTable.GetForm().Title = "Users"
	usersTable.GetForm().Description = "Users"

	return
}
```

业务数据表生成方法是一个函数，返回了```models.Table```这个类型对象。以下是```models.Table```的定义：

```go
type Table interface {
	GetInfo() *types.InfoPanel
	GetForm() *types.FormPanel
	GetCanAdd() bool
	GetEditable() bool
	GetDeletable() bool
	GetFiltersMap() []map[string]string
	GetDataFromDatabase(path string, params *Parameters) PanelInfo
	GetDataFromDatabaseWithId(id string) ([]types.Form, string, string)
	UpdateDataFromDatabase(dataList map[string][]string)
	InsertDataFromDatabase(dataList map[string][]string)
	DeleteDataFromDatabase(id string)
}
```

主要包括了```GetInfo()```和```GetForm()```，这两个函数返回的类型对应的ui就是显示数据的表格和编辑新建数据的表单，截图展示如下：

- 此为```Info```表格

<br>

![](http://quizfile.dadadaa.cn/everyday/app/jlds/img/006tNbRwly1fxoy26qnc5j31y60u0q91.jpg)

- 此为```Form```表单

<br>

![](http://quizfile.dadadaa.cn/everyday/app/jlds/img/006tNbRwly1fxoy2w3cobj318k0ooabv.jpg)

### Info表格

```go
type InfoPanel struct {
	FieldList   []Field  // 字段类型
	Table       string   // 表格
	Title       string   // 标题
	Description string   // 描述
}

type Field struct {
	FilterFn  FieldFilterFn    // 过滤函数
	Field    string            // 字段名
	TypeName string            // 字段类型名
	Head     string            // 标题
	Sortable bool              // 是否可以排序
	Filter   bool              // 是否可以筛选
}
```

### Form表单

```go
type FormPanel struct {
	FormList   []Form    // 字段类型
	Table       string   // 表格
	Title       string   // 标题
	Description string   // 描述
}

type Form struct {
	Field    string                // 字段名
	TypeName string                // 字段类型名
	Head     string                // 标题
	Default  string                // 默认
	Editable bool                  // 是否可编辑
	FormType string                // 表单类型
	Value    string                // 表单默认值
	Options  []map[string]string   // 表单选项
	FilterFn  FieldFilterFn        // 过滤函数
	PostFun  FieldFilterFn         // 处理函数
}
```

目前支持的表单类型有：

- 默认
- 普通文本
- 单选
- 密码
- 富文本
- 文件
- 双选择框
- 多选
- icon下拉选择框
- 时间选择框
- radio选择框
- email输入框
- url输入框
- ip输入框
- 颜色选择框
- 货币输入框
- 数字输入框

</br>

可以这样子去引用：

```

import "github.com/chenhg5/go-admin/template/types/form"

...
FormType: form.File,
...

```

对于选择类型：单选、多选、选择框，需要指定 Options 值。格式为：

```
...
Options: []map[string]string{
	{
        "field": "name",
        "value": "张三",
    },{
        "field": "name",
        "value": "李四",
    },
}
...
```

其中，field为字段名，value为选择对应的值。

### 过滤函数FilterFn与处理函数PostFun说明

```go
// RowModel contains ID and value of the single query result.
type RowModel struct {
	ID    int64
	Value string
}

// FieldFilterFn is filter function of data.
type FieldFilterFn func(value RowModel) interface{}
```

过滤函数接收一个参数，RowModel，表示当前编辑目标行，包含了id和显示的value，而过滤函数的返回值即是最终表单行显示的默认值。
在表格中，可以自定义html返回。
在表单中，对于非选择的表单类型，须返回string，对于单选、多选等选择表单类型，则返回[]string。

处理函数与过滤函数类型一样，可以通过处理函数对表单提交后的数据处理，之后再插入表单。

