(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{407:function(n,t){n.exports='\x3c!--\ntitle: 快速开始 \nsort: 2\n--\x3e\n\ngo-admin通过各种适配器使得你在各个web框架中使用都十分的方便。目前支持的web框架有：\n\n- [gin](http://github.com/gin-gonic/gin)\n- [beego](https://github.com/astaxie/beego)\n- [fasthttp](https://github.com/valyala/fasthttp)\n- [buffalo](https://github.com/gobuffalo/buffalo)\n- [echo](https://github.com/labstack/echo)\n- [gorilla/mux](http://github.com/gorilla/mux)\n- [iris](https://github.com/kataras/iris)\n\n你可以选择你拿手的或者业务项目正在用的框架开始，如果上述没有你喜欢的框架，欢迎给我们提issue或pr！\n\n下面以gin这个框架为例子，演示搭建过程。\n\n## main.go\n\n在你的项目文件夹下新建一个```main.go```文件，内容如下：\n\n```go\npackage main\n\nimport (\n\t_ "github.com/chenhg5/go-admin/adapter/gin" // 引入适配器，必须引入，如若不引入，则需要自己定义\n\t"github.com/chenhg5/go-admin/engine"\n\t"github.com/chenhg5/go-admin/examples/datamodel"\n\t"github.com/chenhg5/go-admin/modules/config"\n\t"github.com/chenhg5/go-admin/plugins/admin"\n\t"github.com/gin-gonic/gin"\n)\n\nfunc main() {\n\tr := gin.Default()\n\n\t// 实例化一个go-admin引擎对象\n\teng := engine.Default()\n\n\t// go-admin全局配置，也可以写成一个json，通过json引入\n\tcfg := config.Config{\n\t\tDATABASE: []config.Database{\n\t\t\t{\n\t\t\t\tHOST:         "127.0.0.1",\n\t\t\t\tPORT:         "3306",\n\t\t\t\tUSER:         "root",\n\t\t\t\tPWD:          "root",\n\t\t\t\tNAME:         "godmin",\n\t\t\t\tMAX_IDLE_CON: 50,\n\t\t\t\tMAX_OPEN_CON: 150,\n\t\t\t\tDRIVER:       "mysql",\n\t\t\t},\n\t\t},\n\t\tDOMAIN: "localhost", // 是cookie相关的，访问网站的域名\n\t\tPREFIX: "admin", // 访问网站的前缀\n\t\t// STORE 必须设置且保证有写权限，否则增加不了新的管理员用户\n\t\tSTORE: config.Store{\n\t\t\tPATH:   "./uploads",\n\t\t\tPREFIX: "uploads",\n\t\t},\n\t\tLANGUAGE: "cn",\n\t}\n\n\t// 这里引入你需要管理的业务表配置\n\t// 关于Generators，详见 https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/tables.go\n\tadminPlugin := admin.NewAdmin(datamodel.Generators)\n\n\t// 增加配置与插件，使用Use方法挂载到Web框架中\n\t_ = eng.AddConfig(cfg).AddPlugins(adminPlugin).Use(r)\n\n\t_ = r.Run(":9033")\n}\n```\n\n请留意以上代码与注释，对应的步骤都加上了注释，使用十分简单，只需要：\n\n- 引入适配器\n- 设置全局的配置项\n- 初始化插件\n- 设置插件与配置\n- 挂载到Web框架中\n\n接着执行```go run main.go```运行代码，访问：[http://localhost:9033/admin/login](http://localhost:9033/admin/login)\n默认登录账号：admin\n默认登录密码：admin\n\n</br>\n\n更多框架的例子可以看：[https://github.com/chenhg5/go-admin/tree/master/examples](https://github.com/chenhg5/go-admin/tree/master/examples)\n\n## 添加自己的业务表进行管理\n\n详见：\n1 [插件的使用](http://doc.go-admin.cn/#/introduce/plugins/plugins)\n2 [Admin插件使用](http://doc.go-admin.cn/#/introduce/plugins/admin)\n\n## 全局配置项说明\n\n[https://github.com/chenhg5/go-admin/blob/master/modules/config/config.go](https://github.com/chenhg5/go-admin/blob/master/modules/config/config.go)\n\n```go\npackage config\n\nimport (\n\t"html/template"\n)\n\ntype Database struct {\n\tHOST         string\n\tPORT         string\n\tUSER         string\n\tPWD          string\n\tNAME         string\n\tMAX_IDLE_CON int\n\tMAX_OPEN_CON int\n\tDRIVER       string\n\n\tFILE string\n}\n\ntype DatabaseList map[string]Database\n\ntype Store struct {\n\tPATH   string\n\tPREFIX string\n}\n\ntype Config struct {\n\t// 数据库配置\n\tDATABASE DatabaseList\n\n\t// 登录域名\n\tDOMAIN string\n\n\t// 网站语言\n\tLANGUAGE string\n\n\t// 全局的管理前缀\n\tPREFIX string\n\n\t// 主题名\n\tTHEME string\n\n\t// 上传文件存储的位置\n\tSTORE Store\n\n\t// 网站的标题\n\tTITLE string\n\n\t// 侧边栏上的Logo\n\tLOGO template.HTML\n\n\t// 侧边栏上的Logo缩小版\n\tMINILOGO template.HTML\n\n\t// 登录后跳转的路由\n\tINDEX string\n\n\t// 是否开始debug模式\n\tDEBUG bool\n\n\t// Info日志路径\n\tINFOLOG string\n\n\t// Error log日志路径\n\tERRORLOG string\n\n\t// Access log日志路径\n\tACCESSLOG string\n\n\t// 是否开始数据库Sql操作日志\n\tSQLLOG bool\n\n\t// 网站颜色主题\n\tCOLORSCHEME string\n}\n\n```\n'}}]);