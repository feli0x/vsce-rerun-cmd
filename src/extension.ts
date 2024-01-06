import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
  let disposable: vscode.Disposable = vscode.commands.registerCommand(
    "extension.restartLastCommand",
    (): void => {
      const terminal: vscode.Terminal | undefined =
        vscode.window.activeTerminal; // Get active terminal

      terminal?.sendText("\u0003"); // Send Ctrl+C
      terminal?.sendText("!!"); // Send command to rerun last command
      terminal?.show(); // Show terminal

      !terminal && vscode.window.showInformationMessage("No active terminal"); // Show error message if no active terminal
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
