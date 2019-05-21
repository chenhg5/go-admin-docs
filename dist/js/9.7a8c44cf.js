(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{402:function(t,n){t.exports='\x3c!--\ntitle: 页面模块化\nsort: 2\n--\x3e\n\n页面自定义需要调用引擎的```Content```方法，需要返回一个对象```types.Panel```\n\n以下是```types.Panel```的定义：\n\n```go\ntype Panel struct {\n\tContent     template.HTML   // 页面内容\n\tTitle       string          // 页面标题\n\tDescription string          // 页面描述\n\tUrl         string\n}\n```\n\n对应的ui，可以看下图：\n\n![](https://ws3.sinaimg.cn/large/006tNbRwly1fxoz5bm02oj31ek0u0wtz.jpg)\n\n## 如何使用\n\n```go\npackage datamodel\n\nimport (\n\t"github.com/chenhg5/go-admin/modules/config"\n\ttemplate2 "github.com/chenhg5/go-admin/template"\n\t"github.com/chenhg5/go-admin/template/types"\n\t"html/template"\n)\n\nfunc GetContent() types.Panel {\n\n\tcomponents := template2.Get(config.Get().THEME)\n\tcolComp := components.Col()\n\n\tinfobox := components.InfoBox().\n\t\tSetText("CPU TRAFFIC").\n\t\tSetColor("blue").\n\t\tSetNumber("41,410").\n\t\tSetIcon("ion-ios-gear-outline").\n\t\tGetContent()\n\n\tvar size = map[string]string{"md": "3", "sm": "6", "xs": "12"}\n\tinfoboxCol1 := colComp.SetSize(size).SetContent(infobox).GetContent()\n\trow1 := components.Row().SetContent(infoboxCol1).GetContent()\n\n\treturn types.Panel{\n\t\tContent:     row1,\n\t\tTitle:       "Dashboard",\n\t\tDescription: "this is a example",\n\t}\n}\n```\n\n## Col 列\n\n一个col列对应的是```ColAttribute```这个类型，有三个方法如下：\n\n```go\ntype ColAttribute interface {\n\tSetSize(value map[string]string) ColAttribute   // 设置大小\n\tSetContent(value template.HTML) ColAttribute    // 设置本列的内容\n\tGetContent() template.HTML                      // 获取内容\n}\n```\n\n关于```size```，参考的例子是：```map[string]string{"md": "3", "sm": "6", "xs": "12"}```\n\n## Row 行\n\n一个row行对应的是```RowAttribute```这个类型，有三个方法如下：\n\n```go\ntype RowAttribute interface {\n\tSetContent(value template.HTML) RowAttribute  // 设置内容\n\tGetContent() template.HTML                    // 获取内容\n}\n```\n'}}]);