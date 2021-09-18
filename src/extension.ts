'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.base64Decode', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const buffer = Buffer.from(word, 'base64');
			const decoded = buffer.toString();
			editor.edit(editBuilder => {
				editBuilder.replace(selection, decoded);
			});
		}

	});

	context.subscriptions.push(disposable);

	const disposable2 = vscode.commands.registerCommand('extension.base64Encode', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const buffer = Buffer.from(word);
			const encoded = buffer.toString('base64');
			editor.edit(editBuilder => {
				editBuilder.replace(selection, encoded);
			});
		}
	});

	context.subscriptions.push(disposable2);
}
