var fs = require('fs-extra');
var util = require('util');

var dirRoots = process.argv.slice(2);

if (dirRoots.length === 0) {
	console.log(
		'wnddel: Delete folders containing really long file paths (say in node_modules).\n' +
		'        Works where Windows tools fail!');
	console.log('\nUSAGE: wnddel dir1 <dir2 <... <dirN>>>');
	return 0;
}

dirRoots.forEach(function (dir) {
	console.log(util.format('Deleting "%s" ...', dir));
	fs.remove(dir, function (err) {
		if (err) {
			console.error(err);
			return err;
		}
		console.log(util.format('"%s" deleted.', dir));
	});
});

return 0;