(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{401:function(n,t){n.exports='\x3c!--\ntitle: 自定义页面\nsort: 3\n--\x3e\n\n调用引擎的```Content```方法，如下：\n\n```go\npackage main\n\nimport (\n\t_ "github.com/chenhg5/go-admin/adapter/gin"\n\t"github.com/chenhg5/go-admin/engine"\n\t"github.com/chenhg5/go-admin/examples/datamodel"\n\t"github.com/chenhg5/go-admin/modules/config"\n\t"github.com/chenhg5/go-admin/plugins/admin"\n\t"github.com/chenhg5/go-admin/plugins/example"\n\t"github.com/chenhg5/go-admin/template/types"\n\t"github.com/gin-gonic/gin"\n)\n\nfunc main() {\n\tr := gin.Default()\n\n\teng := engine.Default()\n\n\tcfg := config.Config{}\n\n\tadminPlugin := admin.NewAdmin(datamodel.Generators)\n\n\texamplePlugin := example.NewExample()\n\n\tif err := eng.AddConfig(cfg).AddPlugins(adminPlugin, examplePlugin).Use(r); err != nil {\n\t\tpanic(err)\n\t}\n\n\tr.Static("/uploads", "./uploads")\n\n\t// 这样子去自定义一个页面：\n\n\tr.GET("/"+cfg.PREFIX+"/custom", func(ctx *gin.Context) {\n\t\tengine.Content(ctx, func() types.Panel {\n\t\t\treturn datamodel.GetContent()\n\t\t})\n\t})\n\n\tr.Run(":9033")\n}\n```\n\n```Content```方法会将内容写入到框架的```context```中。\n\n```GetContent```方法代码如下：\n\n```go\npackage datamodel\n\nimport (\n\t"github.com/chenhg5/go-admin/modules/config"\n\ttemplate2 "github.com/chenhg5/go-admin/template"\n\t"github.com/chenhg5/go-admin/template/types"\n\t"html/template"\n)\n\nfunc GetContent() types.Panel {\n\n\tcomponents := template2.Get(config.Get().THEME)\n\tcolComp := components.Col()\n\n\tinfobox := components.InfoBox().\n\t\tSetText("CPU TRAFFIC").\n\t\tSetColor("blue").\n\t\tSetNumber("41,410").\n\t\tSetIcon("ion-ios-gear-outline").\n\t\tGetContent()\n\n\tvar size = map[string]string{"md": "3", "sm": "6", "xs": "12"}\n\tinfoboxCol1 := colComp.SetSize(size).SetContent(infobox).GetContent()\n\trow1 := components.Row().SetContent(infoboxCol1).GetContent()\n\n\treturn types.Panel{\n\t\tContent:     row1,\n\t\tTitle:       "Dashboard",\n\t\tDescription: "this is a example",\n\t}\n}\n```\n'}}]);