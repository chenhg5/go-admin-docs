(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{398:function(n,e){n.exports='\x3c!--\ntitle: How To Use Plugins\nsort: 1\n--\x3e\n\nTo use the plugin, just call the ```AddPlugins``` method of the engine.\n\nFor example: \n\n```go\npackage main\n\nimport (\n\t"github.com/gin-gonic/gin"\n\t_ "github.com/chenhg5/go-admin/adapter/gin"\n\t"github.com/chenhg5/go-admin/engine"\n\t"github.com/chenhg5/go-admin/plugins/admin"\n\t"github.com/chenhg5/go-admin/plugins/example"\n\t"github.com/chenhg5/go-admin/modules/config"\n\t"github.com/chenhg5/go-admin/examples/datamodel"\n)\n\nfunc main() {\n\tr := gin.Default()\n\teng := engine.Default()\n\tcfg := config.Config{}\n\n\tadminPlugin := admin.NewAdmin(datamodel.Generators)\n\texamplePlugin := example.NewExample()\n\t\n\teng.AddConfig(cfg).\n\t\tAddPlugins(adminPlugin, examplePlugin).  // loading\n\t\tUse(r)\n\n\tr.Run(":9033")\n}\n```\n'}}]);