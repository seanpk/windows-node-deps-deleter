# windows-node-deps-deleter (`wnddel`)

Delete folders containing really long file paths (typically found in node_modules folders) from the command line on Windows.  
(The default Windows Explorer and CMD.EXE tools fail to work on paths longer than a certain number of characters.)

**NOTE**: If you need this functionality from your Node application, use [fs-extra][1] (that's what wnddel uses under the covers).

[1]: https://www.npmjs.com/package/fs-extra

## usage

`npm install -g windows-node-deps-deleter`

`wnddel dir1 <dir2 <... <dirN>>>`

## `wnddel` is pronounced "Wendel"

![Wendel Clark, Toronto Maple Leafs](http://4.bp.blogspot.com/_9Pzyu-v3Yn4/TNDga2wcvFI/AAAAAAAAABg/t5CNT-eyk5o/s640/01_+WendelClark.jpg "wnddel is tough like Wendel Clark and clears away your unwanted node_modules trees")
