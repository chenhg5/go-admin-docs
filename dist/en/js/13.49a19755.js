(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{406:function(n,t){n.exports='\x3c!--\ntitle: Quick Start \nsort: 3\n--\x3e\n\ngo-admin makes it easy to use in various web frameworks through various adapters. Currently supported web frameworks are:\n\n- [gin](http://github.com/gin-gonic/gin)\n- [beego](https://github.com/astaxie/beego)\n- [fasthttp](https://github.com/valyala/fasthttp)\n- [buffalo](https://github.com/gobuffalo/buffalo)\n- [echo](https://github.com/labstack/echo)\n- [gorilla/mux](http://github.com/gorilla/mux)\n- [iris](https://github.com/kataras/iris)\n- [chi](https://github.com/go-chi/chi)\n\n<br>\n\nYou can choose the framework you are using or the business project is using. If there is no framework you like, please feel free to give us an issue or pr!\n\nLet\'s take the gin framework as an example to demonstrate the build process.\n\n## main.go\n\nCreate a new ```main.go``` file in your project folder with the following contents:\n\n```go\npackage main\n\nimport (\n\t_ "github.com/chenhg5/go-admin/adapter/gin" // Import the adapter, it must be imported. If it is not imported, you need to define it yourself.\n\t"github.com/chenhg5/go-admin/engine"\n\t"github.com/chenhg5/go-admin/examples/datamodel"\n\t"github.com/chenhg5/go-admin/modules/config"\n\t"github.com/chenhg5/go-admin/modules/language"\n\t"github.com/chenhg5/go-admin/plugins/admin"\n\t"github.com/gin-gonic/gin"\n)\n\nfunc main() {\n\tr := gin.Default()\n\n\t// Instantiate a go-admin engine object.\n\teng := engine.Default()\n\n\t// go-admin global configuration, can also be written as a json, imported by json.\n\tcfg := config.Config{\n\t\tDATABASE: []config.Database{\n\t\t\t{\n\t\t\t\tHOST:         "127.0.0.1",\n\t\t\t\tPORT:         "3306",\n\t\t\t\tUSER:         "root",\n\t\t\t\tPWD:          "root",\n\t\t\t\tNAME:         "godmin",\n\t\t\t\tMAX_IDLE_CON: 50,\n\t\t\t\tMAX_OPEN_CON: 150,\n\t\t\t\tDRIVER:       "mysql",\n\t\t\t},\n\t\t},\n\t\tDOMAIN: "localhost", // Accessing the domain name of the website.\n\t\tPREFIX: "admin", // The url prefix of the website.\n\t\t// STORE must be set and guaranteed to have write access, otherwise new administrator users cannot be added.\n\t\tSTORE: config.Store{\n\t\t\tPATH:   "./uploads",\n\t\t\tPREFIX: "uploads",\n\t\t},\n\t\tLANGUAGE: language.EN,\n\t}\n\n\t// Import the business table configuration you need to manage here.\n\t// About Generators，see: https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/tables.go\n\tadminPlugin := admin.NewAdmin(datamodel.Generators)\n\n\t// Add configuration and plugins, use the Use method to mount to the web framework.\n\t_ = eng.AddConfig(cfg).AddPlugins(adminPlugin).Use(r)\n\n\t_ = r.Run(":9033")\n}\n```\n\nPlease pay attention to the above code and comments, the corresponding steps are added to the comments, it is simple to use, the following steps:\n\n- Introducing an adapter\n- Set global configuration items\n- Initialize the plugin\n- Set up plugins and configurations\n- Mounted to the web framework\n\n<br>\n\nThen execute ```go run main.go``` to run the code and access: [http://localhost:9033/admin/login](http://localhost:9033/admin/login) <br>\n<br>\ndefault account: admin<br>\ndefault password: admin\n\nmore web framework example: [https://github.com/chenhg5/go-admin/tree/master/examples](https://github.com/chenhg5/go-admin/tree/master/examples)\n\n## Add your own business table for management\n\nSee：<br><br>\n1 [How To Use Plugins](http://doc.go-admin.cn/en/#/introduce/plugins/plugins)<br>\n2 [How To Use Admin Plugin](http://doc.go-admin.cn/en/#/introduce/plugins/admin)\n\n## Global configuration item description\n\n[https://github.com/chenhg5/go-admin/blob/master/modules/config/config.go](https://github.com/chenhg5/go-admin/blob/master/modules/config/config.go)\n\n```go\npackage config\n\nimport (\n\t"html/template"\n)\n\n// Database is a type of database connection config.\n// Because a little difference of different database driver.\n// The Config has multiple options but may be not used.\n// Such as the sqlite driver only use the FILE option which\n// can be ignored when the driver is mysql.\ntype Database struct {\n\tHOST         string `json:"host"`\n\tPORT         string `json:"port"`\n\tUSER         string `json:"user"`\n\tPWD          string `json:"pwd"`\n\tNAME         string `json:"name"`\n\tMAX_IDLE_CON int    `json:"max_idle_con"`\n\tMAX_OPEN_CON int    `json:"max_open_con"`\n\tDRIVER       string `json:"driver"`\n\n\tFILE string `json:"file"`\n}\n\ntype DatabaseList map[string]Database\n\n// Store is the file store config. Path is the local store path.\n// and prefix is the url prefix used to visit it.\ntype Store struct {\n\tPATH   string\n\tPREFIX string\n}\n\n// Config type is the global config of goAdmin. It will be\n// initialized in the engine.\ntype Config struct {\n\t// An map supports multi database connection. The first\n\t// element of DATABASE is the default connection. See the\n\t// file connection.go.\n\tDATABASE DatabaseList `json:"database"`\n\n\t// The cookie domain used in the auth modules. see\n\t// the session.go.\n\tDOMAIN string `json:"domain"`\n\n\t// Used to set as the localize language which show in the\n\t// interface.\n\tLANGUAGE string `json:"language"`\n\n\t// The global url prefix.\n\tPREFIX string `json:"prefix"`\n\n\t// The theme name of template.\n\tTHEME string `json:"theme"`\n\n\t// The path where files will be stored into.\n\tSTORE Store `json:"store"`\n\n\t// The title of web page.\n\tTITLE string `json:"title"`\n\n\t// Logo is the top text in the sidebar.\n\tLOGO template.HTML `json:"logo"`\n\n\t// Mini-logo is the top text in the sidebar when folding.\n\tMINILOGO template.HTML `json:"minilogo"`\n\n\t// The url redirect to after login\n\tINDEX string `json:"index"`\n\n\t// DEBUG mode\n\tDEBUG bool `json:"debug"`\n\n\t// Info log path\n\tINFOLOG string `json:"infolog"`\n\n\t// Error log path\n\tERRORLOG string `json:"errorlog"`\n\n\t// Access log path\n\tACCESSLOG string `json:"accesslog"`\n\n\t// Sql operator record log switch\n\tSQLLOG bool `json:"sqllog"`\n\n\t// Color scheme\n\tCOLORSCHEME string `json:"colorscheme"`\n}\n\n```\n\n<br>\n\n> English is not my main language. If any typo or wrong translation you found, you can send a [issue](https://github.com/chenhg5/go-admin-docs/issues/new) to me or make a pr. I will very appreciate it.'}}]);