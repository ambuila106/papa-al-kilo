set -e

npm run build

cd dist

git init

git add -A

git commit -m 'new development'
git push -f https://github.com/ambuila106/festival-universitario.git master:gh-pages