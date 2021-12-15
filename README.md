# VS Code text encrypt/decrypt

This extension is for encrypt/decrypt selected text.

# notes
1. files under .vscode determines how to debug the source code.
## Demo

![demo](screenshots/encrypt_extension.gif)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.activeTextEditor`](https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor)
- [`TextDocument.getText`](https://code.visualstudio.com/api/references/vscode-api#TextDocument.getText)
- [`TextEditor.edit`](https://code.visualstudio.com/api/references/vscode-api#TextEditor.edit)
- [`TextEditorEdit`](https://code.visualstudio.com/api/references/vscode-api#TextEditorEdit)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)

## Running the Sample

- Run `npm install` in terminal to install dependencies
- Run the `Run Extension` target in the Debug View. This will:
	- Start a task `npm: watch` to compile the code
	- Run the extension in a new VS Code window

# TODO
1. kill tab in yaml file.
2. qr image encode/decode
3. news/btc data
4. Timestamp to local time convertor.


# Refs

1. [VSCODE-TODO-HIGHLIGHT](https://github.com/wayou/vscode-todo-highlight), 高亮TODO
2. [vscode-redmine](https://github.com/rozpuszczalny/vscode-redmine)
