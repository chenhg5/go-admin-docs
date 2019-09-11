(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{407:function(n,t){n.exports="\x3c!--\ntitle: 安装\nsort: 2\n--\x3e\n\n本程序是基于golang，推荐使用版本高于1.11的golang，具体请访问：[https://golang.org](https://golang.org)\n\n## 下载最新版本程序包\n\n```\ngo get -v -u github.com/chenhg5/go-admin\n```\n\n建议开启```GO111MODULE=on```自动加载依赖，并设置```GOPROXY```为https://goproxy.cn\n要保证下载的是最新版本，旧版本可能出现各种问题，具体版本看这里：<br>\n\n[https://github.com/chenhg5/go-admin/releases](https://github.com/chenhg5/go-admin/releases)\n\n如果下载依赖包仍存在问题，可直接下载下面的vendor包：<br>\n\n[https://gitee.com/cg33/go-admin/raw/master/vendor/vendor.zip](https://gitee.com/cg33/go-admin/raw/master/vendor/vendor.zip)\n\n## 导入程序所需sql到对应自建数据库中\n\n> mysql\n> \n> [https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql)\n> \n> sqlite\n> \n> [https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.db](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.db)\n> \n> postgresql\n> \n> [https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.pgsql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.pgsql)\n\n## 安装命令行工具\n\n安装命令行工具，同时确保```$GOPATH/bin```有在环境变量路径中\n\n```\ngo install github.com/chenhg5/go-admin/admincli\n```\n\n<br>\n\n🍺🍺 到这里准备工作完毕~~看[快速开始部分](http://doc.go-admin.cn/#/introduce/init-project)\n\n"}}]);