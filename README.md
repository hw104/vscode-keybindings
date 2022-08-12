# STBBORN VSCODE KEYBOARD SHORTCUTS

- [Principles](#principles)
- [Editing](#editing)
  - [Cursor Moving](#cursor-moving)
  - [Deletion](#deletion)
  - [Selection](#selection)
  - [Copy / Paste](#copy--paste)
- [IDE Features](#ide-features)

## Principles

- Easy to remember.
- Easy to type. Keep fingers close to home position.
- For keyboards with the <kbd>ctrl</kbd> key next to the <kbd>a</kbd> key and the <kbd>shift</kbd> and <kbd>alt</kbd> keys near each thumb.

## Editing

### Cursor Moving

- <kbd>ctrl</kbd> + <kbd>n</kbd>: ⬆️ Cursor (N)ext Line. Cursor down.
- <kbd>ctrl</kbd> + <kbd>p</kbd>: ⬇️ Cursor (P)revious Line. Cursor up.
- <kbd>ctrl</kbd> + <kbd>f</kbd>: ➡️ Cursor (f)orward.
- <kbd>ctrl</kbd> + <kbd>b</kbd>: ⬅️ Cursor (b)ack.
- <kbd>ctrl</kbd> + <kbd>a</kbd>: ⬅️⬅️ Cursor line start(=a).
- <kbd>ctrl</kbd> + <kbd>e</kbd>: ➡️➡️ Cursor line (e)nd.
- <kbd>ctrl</kbd> + <kbd>l</kbd>: 🔙 Go to (L)ast Edit Location.
- <kbd>ctrl</kbd> + <kbd>[</kbd>: `Go to Bracket`.
- <kbd>ctrl</kbd> + <kbd>v</kbd>: ⏬ Page down. `cursorPageDown`.

### Deletion

- <kbd>ctrl</kbd> + <kbd>h</kbd>: Delete left.
- <kbd>alt</kbd> + <kbd>h</kbd>: Delete left word.
- <kbd>ctrl</kbd> + <kbd>d</kbd>: Delete right.
- <kbd>alt</kbd> + <kbd>d</kbd>: Delete right word.
- <kbd>ctrl</kbd> + <kbd>k</kbd>: `Delete All Right`.
- <kbd>alt</kbd> + <kbd>k</kbd>: `Delete All Left`.

### Selection

- <kbd>ctrl</kbd> + <kbd>;</kbd>:
  Expand Selection. `editor.action.smartSelect.grow`
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>;</kbd>:
  Shrink Selection. `editor.action.smartSelect.shrink`.
- <kbd>ctrl</kbd> + <kbd>]</kbd>: `Select to Bracket`.
- <kbd>ctrl</kbd> + <kbd>g</kbd>: `cancelSelection`.

### Copy / Paste

- <kbd>ctrl</kbd> + <kbd>w</kbd>: Cut.
- <kbd>alt</kbd> + <kbd>w</kbd>: Copy.
- <kbd>ctrl</kbd> + <kbd>y</kbd>: Paste
- <kbd>alt</kbd> + <kbd>y</kbd>: Cyclic paste from history with [multiclip](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip).
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>y</kbd>: Select and paste from history with [multiclip](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip).

## IDE Features

### Basic rule

- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>?</kbd>: [Jump](#jump).
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>?</kbd>: Generate code.
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>?</kbd>:
  Display, Inspect or Peek information.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>number</kbd>: Git operation.
- <kbd>alt</kbd> + <kbd>number</kbd>: Toggle IDE tools views.
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>?</kbd>: Misc.

### Jump

- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>b</kbd>: Go (B)ack.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>f</kbd>: Go (F)orward.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>g</kbd>: (G)o to Definition.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>d</kbd>: Go to (D)eclaration.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>i</kbd>: Go to (I)mplementations.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>r</kbd>: Go to (R)eferences.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>t</kbd>: Go to (T)ype Definition.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>n</kbd>: Go to (N)ext Problem.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>n</kbd>: Go to (N)ext Problem in Files.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>p</kbd>: Go to (P)revious Problem.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>: Go to (P)revious Problem in Files.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>s</kbd>: Go to (S)ymbol in Editor...
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>s</kbd>: Go to (S)ymbol in Workspace...
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>l</kbd>: Go to (L)ast Edit Location.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>e</kbd>: Go to (E)ditor.
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>j</kbd>: Open Breadcrumbs and Selet and (J)ump.
