﻿var filename_count = {},	pattern = /^#\w+/function getFilename(filename) {	filename = filename.slice(1)	if (filename_count.hasOwnProperty(filename)) {		filename_count[filename]++		filename = filename + "-" + filename_count[filename]	} else {		filename_count[filename] = 0	}	return filename}(function main() {	var doc = app.activeDocument,		root = Folder.desktop,		i, o,		exporter = getExporter(root)	if (typeof(exporter) === "undefined") {		return	}	for (i = 0; i < doc.pageItems.length; i++ ) {		o = doc.pageItems[i]		if (o.name.match(pattern)) {			exporter.write(o, getFilename(o.name))		}	}	exporter.done()})()