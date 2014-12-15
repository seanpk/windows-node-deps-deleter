# windows-node-deps-deleter

Delete folders containing really long file paths (typically found in node_modules folders) from the command line on Windows.  
(The default Windows Explorer and CMD.EXE tools fail to work on paths longer than a certain number of characters.)

**NOTE**: If you need this functionality from your Node application, use [fs-extra][1] (that's what wnddel uses under the covers).

## usage

`npm install -g https://github.com/PointSource/windows-node-deps-deleter/archive/0.1.1.tar.gz`

`wnddel dir1 <dir2 <... <dirN>>>`

[1]: https://www.npmjs.com/package/fs-extra
