## Globetown website

During development run the project with
```
npm run dev
```

The website is live through Izaak github, add it with `git remote add izaak <where ever>`.

Develop on master with `harp server _harp`. Once happy with it:
- sync with masters
- checkout to remote izaak gh-pages
- pull from master
- `harp compile _harp ./`
- push to gh-pages
