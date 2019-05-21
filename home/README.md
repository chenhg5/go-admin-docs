<!--
title: 
layout: IndexLayout
visible: true
logo: https://ws2.sinaimg.cn/large/006tNc79ly1ftvqf8qeddj31bz07e40e.jpg
-->

<style>
body, html { background: #fff; }
.markdown{ padding: 0 20px; }
.jumbotron {
  position: absolute;
  background-color: #383838;
  top: 56px;
  left: 0;
  right: 0;
  padding-top: 80px;
  min-height: 380px;
  color: #c1c1c1;
}
.jumbotron-block { min-height: 400px; }
.jumbotron-warpper {
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
}
.jumbotron-title {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
}
.jumbotron-des {
  font-size: 1.55rem;
  line-height: 1.5;
  font-weight: 300;
  margin-bottom: 30px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.jumbotron .jumbotron-btn {
  display: inline-block;
  color: #333;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #fff;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.jumbotron-btn:hover {
  background-color: #bbb;
  color: #333;
}
.jumbotron-btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}
.banner-start-command {
    background: #3a4046;
    font-family: Source Code Pro,Monaco,Menlo,Consolas,monospace;
    padding: 15px 20px;
    font-size: 0.9rem;
}
.banner-start-link {
    background: #859096;
    padding: 15px;
    text-decoration: none;
    -webkit-transition: .2s;
    transition: .2s;
    font-size: 0.9rem;
    margin-left: -7px;
    color: #c7d6d6 !important;
}
.banner-start-command:before {
    content: "$";
    opacity: .5;
    padding-right: 10px;    
}
.font-weight-light {
    font-weight: 300!important;
}
.callout.minimal .callout-title {
    color: #444;
    font-weight: 300;
    font-size: 26px;
    margin: 0 0 30px;
    padding-top: 10px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.callout.minimal p {
    color: #777;
    font-size: 17px;
}
.callout.minimal p, .callout.pop p {
    line-height: 1.6;
    margin: 0;
    -webkit-font-smoothing: antialiased;
}
.callout.minimal {
    box-shadow: 0 10px 40px 0 rgba(62,57,107,.07), 0 2px 9px 0 rgba(62,57,107,.06);
    border-radius: 4px;
    padding: 15px 30px 20px;
    transition: all .2s ease;
}

.callout {
    display: block;
    margin-bottom: 15px;
    background: #fff;
    min-width: 100%;
}
.callout-icon.text-primary.py-2 {
  text-align: center;
}
</style>
<div class="jumbotron">
  <div class="jumbotron-warpper">
    <div class="jumbotron-des">GoAdmin 可以帮助您的golang应用快速实现数据可视化，短时间内搭建一个<br>功能齐全的数据管理平台。</div>
    <!-- <a class="jumbotron-btn" href="#/introduce/init-project">快速开始</a> -->
    <div class="jumbotron-des">
      <span class="banner-start-command d-inline-block font-weight-light">go get github.com/chenhg5/go-admin</span>
      <a class="banner-start-link text-white d-inline-block" href="#/introduce/install">-></a>
    </div>
    <div class="jumbotron-des" style="margin-top: 40px;">
      <iframe src="https://ghbtns.com/github-btn.html?user=chenhg5&amp;repo=go-admin&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=chenhg5&amp;repo=go-admin&amp;type=fork&amp;count=true" frameborder="0" scrolling="0" width="105px" height="20px"></iframe>
    </div>
  </div>
</div>
<div class="jumbotron-block"> </div>

<section class="hero gray">
    <div class="ui container">
        <div class="ui equal width stackable doubling grid">
            <div class="column d-flex align-items-stretch">
                <div class="callout minimal text-center">
                    <div class="callout-icon text-primary py-2"><i class="disabled camera retro icon" style="font-size: 5rem;"></i></div>
                    <div class="callout-head">
                        <div class="callout-title">漂亮的管理界面</div>
                    </div>
                    <p>使用adminlte构建的漂亮的管理界面</p>
                </div>
            </div>
            <div class="column d-flex align-items-stretch">
                <div class="callout minimal text-center">
                    <div class="callout-icon text-primary py-2"><i class="disabled plug icon" style="font-size: 5rem;"></i></div>
                    <div class="callout-head">
                        <div class="callout-title">大量插件供使用</div>
                    </div>
                    <p>不用重复造轮子，使用插件提升效率</p>
                </div>
            </div>
            <div class="column d-flex align-items-stretch">
                <div class="callout minimal text-center">
                    <div class="callout-icon text-primary py-2"><i class="disabled users icon" style="font-size: 5rem;"></i></div>
                    <div class="callout-head">
                        <div class="callout-title">完善的认证系统</div>
                    </div>
                    <p>开箱即用的rcba认证系统</p>
                </div>
            </div>
            <div class="column d-flex align-items-stretch">
                <div class="callout minimal text-center">
                    <div class="callout-icon text-primary py-2"><i class="disabled handshake outline icon" style="font-size: 5rem;"></i></div>
                    <div class="callout-head">
                        <div class="callout-title">支持多个web框架</div>
                    </div>
                    <p>多个golang web框架支持：gin, beego, echo, iris等等</p>
                </div>
            </div>
        </div>
    </div>
</section>
