import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.restartLastCommand",
    () => {
      const terminal = vscode.window.activeTerminal;
      if (terminal) {
        terminal.sendText("\u0003"); // Send Ctrl+C
        terminal.sendText("!!"); // Send command to rerun last command
      } else {
        vscode.window.showInformationMessage("No active terminal");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
