'use strict';

import * as vscode from 'vscode';
const CryptoJS = require("crypto-js");

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

	// encrypt with AES

	const disposableEncrypt = vscode.commands.registerCommand('extension.EncryptSelectedText', async function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const passString = await vscode.window.showInputBox({ prompt: 'Provide your passphrase', placeHolder: 'My passphrase',	password: true, validateInput: value => (value.length == 0) ? "Passphrase cannot be empty" : null });
		    const cipherText = CryptoJS.AES.encrypt(word, passString).toString();
			editor.edit(editBuilder => {
				editBuilder.replace(selection, cipherText);
			});
		}
	});

	context.subscriptions.push(disposableEncrypt);


	// decrypt with AES

	const disposableDecrypt = vscode.commands.registerCommand('extension.DecryptSelectedText', async function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const passString = await vscode.window.showInputBox({ prompt: 'Provide your passphrase', placeHolder: 'My passphrase',	password: true, validateInput: value => (value.length == 0) ? "Passphrase cannot be empty" : null });
			const bytes  = CryptoJS.AES.decrypt(word, passString);
		    const plainText = bytes.toString(CryptoJS.enc.Utf8);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, plainText);
			});
		}
	});

	context.subscriptions.push(disposableDecrypt);
}
