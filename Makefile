all:
	npm run build
	rm -rf dist
	cp -R .rdoc-dist dist
	git add . && git commit -a -m 'update' && git push origin master
	ansible-playbook -i ./deploy/hosts ./deploy/deploy.yml	