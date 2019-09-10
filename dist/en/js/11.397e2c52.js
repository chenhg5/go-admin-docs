(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{404:function(n,e){n.exports='\x3c!--\ntitle: Installation\nsort: 1\n--\x3e\n\nThis program is based on golang. It is recommended to use golang with version higher than 1.11. Please visit: [https://golang.org](https://golang.org)\n\n## Download the latest version of the package\n\n```golang\ngo get -v -u github.com/chenhg5/go-admin\n```\n\nIt is recommended to enable ```go mod``` to automatically load dependencies.\nTo ensure that the latest version is downloaded, the old version may have various problems. The specific version is here: <br>\n\n[https://github.com/chenhg5/go-admin/releases](https://github.com/chenhg5/go-admin/releases)\n\nIf you still have problems downloading dependencies, you can download the following vendor package directly: <br>\n\n[https://gitee.com/cg33/go-admin/raw/master/vendor/vendor.zip](https://gitee.com/cg33/go-admin/raw/master/vendor/vendor.zip)\n\n## Import the program required sql to the corresponding self-built database\n\n> mysql\n> \n> [https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.sql)\n>\n> sqlite\n>\n> [https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.db](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.db)\n>\n> postgresql\n>\n> [https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.pgsql](https://github.com/chenhg5/go-admin/blob/master/examples/datamodel/admin.pgsql)\n\n## Create or import your own business table\n\nThe database needs to have its own business table, otherwise "no tables" error will appear in subsequent generation operations.\n\n## Install command line tools\n\nInstall the command line tool while ensuring that ```$GOPATH/bin``` is in the environment variable path\n\n```\ngo install github.com/chenhg5/go-admin/admincli\n```\n\n<br>\n\n🍺🍺 Get ready to work here, next to the [Quick start](http://doc.go-admin.cn/#/introduce/init-project)\n\n<br>\n\n> English is not my main language. If any typo or wrong translation you found, you can send a [issue](https://github.com/chenhg5/go-admin-docs/issues/new) to me or make a pr. I will very appreciate it.\n\n'}}]);