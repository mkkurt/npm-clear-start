const vscode = require("vscode");

let terminal;

function activate(context) {
  console.log("Extension 'npm-clear-start' is now active!");
  // Create a new terminal instance on extension launch if there are no open terminals
  if (vscode.window.terminals.length === 0) {
    terminal = vscode.window.createTerminal();
    terminal.show();
  } else {
    terminal = vscode.window.activeTerminal || vscode.window.terminals[0];
  }

  // Create status bar items for the terminal
  const startButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  startButton.text = "$(play) Run Start";
<<<<<<< HEAD
  startButton.command = "npm-clear-start.runStartCommand";
=======
  startButton.command = "noderunaddon.runStartCommand";
>>>>>>> temp-branch
  startButton.show();

  const clearAndStartButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    99
  );
  clearAndStartButton.text = "$(play) Clear and Run Start";
<<<<<<< HEAD
  clearAndStartButton.command = "npm-clear-start.clearAndRunStartCommand";
=======
  clearAndStartButton.command = "noderunaddon.clearAndRunStartCommand";
>>>>>>> temp-branch
  clearAndStartButton.show();

  // Register the command to run the start script
  let runStartDisposable = vscode.commands.registerCommand(
<<<<<<< HEAD
    "npm-clear-start.runStartCommand",
=======
    "noderunaddon.runStartCommand",
>>>>>>> temp-branch
    () => {
      console.log("Run npm start");
      terminal.sendText("npm start");
    }
  );

  // Register the command to run the second-latest command
  let runClearAndStartDisposable = vscode.commands.registerCommand(
<<<<<<< HEAD
    "npm-clear-start.clearAndRunStartCommand",
=======
    "noderunaddon.clearAndRunStartCommand",
>>>>>>> temp-branch
    () => {
      console.log("Clear terminal (clear) and run npm start");
      terminal.sendText("clear");
      terminal.sendText("npm start");
    }
  );

  // Add the disposables to the context subscriptions
  context.subscriptions.push(startButton);
  context.subscriptions.push(clearAndStartButton);
  context.subscriptions.push(runStartDisposable);
  context.subscriptions.push(runClearAndStartDisposable);

  // Register an event listener for terminal creation
  vscode.window.onDidOpenTerminal((event) => {
    terminal = event;
  });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
