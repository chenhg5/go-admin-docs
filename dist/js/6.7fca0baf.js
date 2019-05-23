(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{399:function(n,e){n.exports='\x3c!--\ntitle: Admin插件使用 \nsort: 2\n--\x3e\n\nadmin插件可以帮助你实现快速生成数据库数据表增删改查的Web数据管理平台。\n\n## 快速开始\n\n需要如下几步：\n\n- 生成数据表对应的配置文件\n- 设置访问路由\n- 初始化，并在引擎中加载\n- 设置访问菜单\n\n### 生成配置文件\n\n假设你的数据库里面有一个数据表users，如：\n\n```sql\nCREATE TABLE `users` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,\n  `gender` tinyint(4) DEFAULT NULL,\n  `city` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,\n  `ip` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,\n  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,\n  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  `updated_at` timestamp NULL DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=3635 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n```\n\n使用自带的命令行工具可以帮助你快速生成配置文件，如：\n\n- 安装\n\n```bash\ngo install github.com/chenhg5/go-admin/admincli\n```\n\n- 生成\n\n```bash\nadmincli generate\n```\n\n根据提示填写信息，运行完之后，会生成一个文件```users.go```，这个就是对应数据表的配置文件了，关于如何配置，在后面详细介绍。\n\n### 设置访问路由\n\n生成完配置文件后，你需要设置访问这个数据表数据的路由，如：\n\n```go\npackage datamodel\n\nimport "github.com/chenhg5/go-admin/plugins/admin/models"\n\n// The key of Generators is the prefix of table info url.\n// The corresponding value is the Form and Table data.\nvar Generators = map[string]models.TableGenerator{\n\t"user":    GetUserTable,\n}\n```\n\n其中，```"user"```就是对应的前缀，```GetUserTable```就是配置文件中的方法，只要一一对应即可。\n\n### 初始化，并在引擎中加载\n\n初始化，需要调用```NewAdmin```方法，然后将上面的```Generators```传进去即可。然后再调用引擎的```AddPlugins```方法加载引擎。\n\n```go\npackage main\n\nimport (\n\t"github.com/gin-gonic/gin"\n\t_ "github.com/chenhg5/go-admin/adapter/gin" // 必须引入，如若不引入，则需要自己定义\n\t"github.com/chenhg5/go-admin/engine"\n\t"github.com/chenhg5/go-admin/plugins/admin"\n\t"github.com/chenhg5/go-admin/modules/config"\n\t"github.com/chenhg5/go-admin/examples/datamodel"\n)\n\nfunc main() {\n\tr := gin.Default()\n\teng := engine.Default()\n\tcfg := config.Config{}\n\n\tadminPlugin := admin.NewAdmin(datamodel.Generators)\n\t\n\teng.AddConfig(cfg).\n\t\tAddPlugins(adminPlugin).  // 加载插件\n\t\tUse(r)\n\n\tr.Run(":9033")\n}\n```\n\n### 设置访问菜单\n\n运行起来后，访问登录网址，进入到菜单管理页面，设置好数据表的管理菜单就可以在侧边栏中进入了。\n\n## 配置文件介绍\n\n配置文件，如下：\n\n```go\npackage main\n\nimport (\n\t"github.com/chenhg5/go-admin/template/types"\n\t"github.com/chenhg5/go-admin/plugins/admin/models"\n)\n\nfunc GetUsersTable() (usersTable models.Table) {\n\n\tusersTable.Info.FieldList = []types.Field{}\n\n\tusersTable.Info.Table = "users"\n\tusersTable.Info.Title = "Users"\n\tusersTable.Info.Description = "Users"\n\n\tusersTable.Form.FormList = []types.Form{}\n\n\tusersTable.Form.Table = "users"\n\tusersTable.Form.Title = "Users"\n\tusersTable.Form.Description = "Users"\n\n\tusersTable.ConnectionDriver = "mysql"\n\n\treturn\n}\n```\n\n是一个函数，返回了```models.Table```这个类型对象。以下是```models.Table```的定义：\n\n```go\ntype Table struct {\n\tInfo             types.InfoPanel\n\tForm             types.FormPanel\n\tConnectionDriver string\n}\n```\n\n包括了```Info```和```Form```，这两种类型对应的ui就是显示数据的表格和编辑新建数据的表单，截图展示如下：\n\n- 此为```Info```表格\n\n![](https://ws4.sinaimg.cn/large/006tNbRwly1fxoy26qnc5j31y60u0q91.jpg)\n\n- 此为```Form```表单\n\n![](https://ws1.sinaimg.cn/large/006tNbRwly1fxoy2w3cobj318k0ooabv.jpg)\n\n### Info表格\n\n```go\ntype InfoPanel struct {\n\tFieldList   []Field  // 字段类型\n\tTable       string         // 表格\n\tTitle       string         // 标题\n\tDescription string         // 描述\n}\n\ntype Field struct {\n\tExcuFun  FieldValueFun     // 过滤函数\n\tField    string            // 字段名\n\tTypeName string            // 字段类型名\n\tHead     string            // 标题\n\tSortable bool              // 是否可以排序\n\tFilter   bool              // 是否可以筛选\n}\n```\n\n### Form表单\n\n```go\ntype FormPanel struct {\n\tFormList   []Form    // 字段类型\n\tTable       string         // 表格\n\tTitle       string         // 标题\n\tDescription string         // 描述\n}\n\ntype Form struct {\n\tField    string                // 字段名\n\tTypeName string                // 字段类型名\n\tHead     string                // 标题\n\tDefault  string                // 默认\n\tEditable bool                  // 是否可编辑\n\tFormType string                // 表单类型\n\tValue    string                // 表单默认值\n\tOptions  []map[string]string   // 表单选项\n\tExcuFun  FieldValueFun         // 过滤函数\n}\n```\n\n目前支持的表单类型有：\n\n- 默认\n- 普通文本\n- 单选\n- 密码\n- 富文本\n- 文件\n- 双选择框\n- 多选\n- icon下拉选择框\n\n可以这样子去引用：\n\n```\n\nimport "github.com/chenhg5/go-admin/template/types/form"\n\n...\nFormType: form.File,\n...\n\n```\n\n对于选择类型：单选、多选、选择框，需要指定 Options 值。格式为：\n\n```\n...\nOptions: []map[string]string{\n\t{\n        "field": "name",\n        "value": "张三",\n    },{\n        "field": "name",\n        "value": "李四",\n    },\n}\n...\n```\n\n其中，field为字段名，value为选择对应的值。\n\n### 过滤函数ExcuFun说明\n\n```go\n// RowModel contains ID and value of the single query result.\ntype RowModel struct {\n\tID    int64\n\tValue string\n}\n\n// FieldValueFun is filter function of data.\ntype FieldValueFun func(value RowModel) interface{}\n```\n\n过滤函数接收一个参数，RowModel，表示当前编辑目标行，包含了id和显示的value，而过滤函数的返回值即是最终表单行显示的默认值。\n在表格中，可以自定义html返回。\n在表单中，对于非选择的表单类型，须返回string，对于单选、多选等选择表单类型，则返回[]string。\n\n'}}]);