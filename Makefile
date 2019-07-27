all:
	npm run build
	rm -rf dist
	cp -R .rdoc-dist dist
	sed -i '' 's/<\/html>//g' dist/index.html
	echo '<div style="display: none;"><script type="text/javascript" src="https://v1.cnzz.com/z_stat.php?id=1277862090&web_id=1277862090"></script></div></html>' >> dist/index.html
	git add . && git commit -a -m 'update' && git push origin master
	ansible-playbook -i ./deploy/hosts ./deploy/deploy.yml	