(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{416:function(n,i){n.exports='\x3c!--\ntitle: \nlayout: IndexLayout\nvisible: true\nlogo: https://ws2.sinaimg.cn/large/006tNc79ly1ftvqf8qeddj31bz07e40e.jpg\n--\x3e\n\n<style>\nbody, html { background: #fff; }\n.markdown{ padding: 0 20px; }\n.jumbotron {\n  position: absolute;\n  background-color: #383838;\n  top: 56px;\n  left: 0;\n  right: 0;\n  padding-top: 80px;\n  min-height: 380px;\n  color: #c1c1c1;\n}\n.jumbotron-block { min-height: 400px; }\n.jumbotron-warpper {\n  max-width: 1200px;\n  padding: 0 30px;\n  margin: 0 auto;\n}\n.jumbotron-title {\n  font-size: 30px;\n  font-weight: bold;\n  padding-bottom: 20px;\n}\n.jumbotron-des {\n  font-size: 1.55rem;\n  line-height: 1.5;\n  font-weight: 300;\n  margin-bottom: 30px;\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n}\n.jumbotron .jumbotron-btn {\n  display: inline-block;\n  color: #333;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  background-color: #fff;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n.jumbotron-btn:hover {\n  background-color: #bbb;\n  color: #333;\n}\n.jumbotron-btn:focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\n}\n.banner-start-command {\n    background: #3a4046;\n    font-family: Source Code Pro,Monaco,Menlo,Consolas,monospace;\n    padding: 15px 20px;\n    font-size: 0.9rem;\n}\n.banner-start-link {\n    background: #859096;\n    padding: 15px;\n    text-decoration: none;\n    -webkit-transition: .2s;\n    transition: .2s;\n    font-size: 0.9rem;\n    margin-left: -7px;\n    color: #c7d6d6 !important;\n}\n.banner-start-command:before {\n    content: "$";\n    opacity: .5;\n    padding-right: 10px;    \n}\n.font-weight-light {\n    font-weight: 300!important;\n}\n.callout.minimal .callout-title {\n    color: #444;\n    font-weight: 300;\n    font-size: 26px;\n    margin: 0 0 30px;\n    padding-top: 10px;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n}\n.callout.minimal p {\n    color: #777;\n    font-size: 17px;\n}\n.callout.minimal p, .callout.pop p {\n    line-height: 1.6;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n}\n.callout.minimal {\n    box-shadow: 0 10px 40px 0 rgba(62,57,107,.07), 0 2px 9px 0 rgba(62,57,107,.06);\n    border-radius: 4px;\n    padding: 15px 30px 20px;\n    transition: all .2s ease;\n}\n\n.callout {\n    display: block;\n    margin-bottom: 15px;\n    background: #fff;\n    min-width: 100%;\n}\n.callout-icon.text-primary.py-2 {\n  text-align: center;\n}\n</style>\n<div class="jumbotron">\n  <div class="jumbotron-warpper">\n    <div class="jumbotron-des">GoAdmin 可以帮助您的golang应用快速实现数据可视化，短时间内搭建一个<br>功能齐全的数据管理平台。</div>\n    \x3c!-- <a class="jumbotron-btn" href="#/introduce/init-project">快速开始</a> --\x3e\n    <div class="jumbotron-des">\n      <span class="banner-start-command d-inline-block font-weight-light">go get github.com/chenhg5/go-admin</span>\n      <a class="banner-start-link text-white d-inline-block" href="#/introduce/install">-></a>\n    </div>\n    <div class="jumbotron-des" style="margin-top: 40px;">\n      <iframe src="https://ghbtns.com/github-btn.html?user=chenhg5&amp;repo=go-admin&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>\n      <iframe src="https://ghbtns.com/github-btn.html?user=chenhg5&amp;repo=go-admin&amp;type=fork&amp;count=true" frameborder="0" scrolling="0" width="105px" height="20px"></iframe>\n    </div>\n  </div>\n</div>\n<div class="jumbotron-block"> </div>\n\n<section class="hero gray">\n    <div class="ui container">\n        <div class="ui equal width stackable doubling grid">\n            <div class="column d-flex align-items-stretch">\n                <div class="callout minimal text-center">\n                    <div class="callout-icon text-primary py-2"><i class="disabled camera retro icon" style="font-size: 5rem;"></i></div>\n                    <div class="callout-head">\n                        <div class="callout-title">漂亮的管理界面</div>\n                    </div>\n                    <p>使用adminlte构建的漂亮的管理界面</p>\n                </div>\n            </div>\n            <div class="column d-flex align-items-stretch">\n                <div class="callout minimal text-center">\n                    <div class="callout-icon text-primary py-2"><i class="disabled plug icon" style="font-size: 5rem;"></i></div>\n                    <div class="callout-head">\n                        <div class="callout-title">大量插件供使用</div>\n                    </div>\n                    <p>不用重复造轮子，使用插件提升效率</p>\n                </div>\n            </div>\n            <div class="column d-flex align-items-stretch">\n                <div class="callout minimal text-center">\n                    <div class="callout-icon text-primary py-2"><i class="disabled users icon" style="font-size: 5rem;"></i></div>\n                    <div class="callout-head">\n                        <div class="callout-title">完善的认证系统</div>\n                    </div>\n                    <p>开箱即用的rcba认证系统</p>\n                </div>\n            </div>\n            <div class="column d-flex align-items-stretch">\n                <div class="callout minimal text-center">\n                    <div class="callout-icon text-primary py-2"><i class="disabled handshake outline icon" style="font-size: 5rem;"></i></div>\n                    <div class="callout-head">\n                        <div class="callout-title">支持多个web框架</div>\n                    </div>\n                    <p>多个golang web框架支持：gin, beego, echo, iris等等</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n'}}]);