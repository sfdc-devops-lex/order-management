##Commit  msg pattern

feat: for any new feature implementation
fix: any bug fixes
docs: for documentation added/updated/deleted
refactor: if any update in exisitng codebase 
test: if any test classes junit,apextest is added
perf: for any performance related code

##branch
git branch bn /git branch bn sourcebranch - CREATE
git checkout bn /git checkout bn sourcebranch - SWITCH/CHECKOUT

#single command to create and switch
git checkout -b bn /git checkout -b bn sourcebranch
OR

#new way of creating and switching branch
git switch -c bn - create branch from current branch
git switch -c bn sourcebranch - create new branch from other branch

# git revert