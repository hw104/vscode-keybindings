# STBBORN VSCODE KEYBOARD SHORTCUTS

- [Principles](#principles)
- [Editing](#editing)
  - [Cursor Moving](#cursor-moving)
  - [Deletion](#deletion)
  - [Selection](#selection)
  - [File](#file)
  - [Editor](#editor)
- [IDE Features](#ide-features)

## Principles

- Easy to remember.
- Easy to type. Keep fingers close to home position.
- For keyboards with the <kbd>ctrl</kbd> key next to the <kbd>a</kbd> key and the <kbd>shift</kbd> and <kbd>alt</kbd> keys near each thumb.

## Editing

### Cursor Moving

- <kbd>ctrl</kbd> + <kbd>n</kbd>: ⬆️ Cursor (N)ext Line. Cursor down
- <kbd>ctrl</kbd> + <kbd>p</kbd>: ⬇️ Cursor (P)revious Line. Cursor up
- <kbd>ctrl</kbd> + <kbd>f</kbd>: ➡️ Cursor (f)orward
- <kbd>ctrl</kbd> + <kbd>b</kbd>: ⬅️ Cursor (b)ack
- <kbd>ctrl</kbd> + <kbd>a</kbd>: ⬅️⬅️ Cursor line start(=a)
- <kbd>ctrl</kbd> + <kbd>e</kbd>: ➡️➡️ Cursor line (e)nd
- <kbd>ctrl</kbd> + <kbd>l</kbd>: 🔙 Go to (L)ast Edit Location
- <kbd>ctrl</kbd> + <kbd>[</kbd>: `Go to Bracket`
- <kbd>ctrl</kbd> + <kbd>v</kbd>: ⏬ Page down. `cursorPageDown`

### Deletion

- <kbd>ctrl</kbd> + <kbd>h</kbd>: Delete left
- <kbd>alt</kbd> + <kbd>h</kbd>: Delete left word
- <kbd>ctrl</kbd> + <kbd>d</kbd>: Delete right
- <kbd>alt</kbd> + <kbd>d</kbd>: Delete right word
- <kbd>ctrl</kbd> + <kbd>k</kbd>: `Delete All Right`
- <kbd>alt</kbd> + <kbd>k</kbd>: `Delete All Left`

### Selection

- <kbd>ctrl</kbd> + <kbd>;</kbd>:
  Expand Selection. `editor.action.smartSelect.grow`
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>;</kbd>:
  Shrink Selection. `editor.action.smartSelect.shrink`
- <kbd>ctrl</kbd> + <kbd>]</kbd>: `Select to Bracket`
- <kbd>ctrl</kbd> + <kbd>space</kbd>: Start or End Selection
- <kbd>ctrl</kbd> + <kbd>g</kbd>: `cancelSelection`

### Copy / Paste

- <kbd>ctrl</kbd> + <kbd>w</kbd>: Cut
- <kbd>alt</kbd> + <kbd>w</kbd>: Copy
- <kbd>ctrl</kbd> + <kbd>y</kbd>: Paste
- <kbd>alt</kbd> + <kbd>y</kbd>: Cyclic paste from history with [multiclip](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip)
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>y</kbd>: Select and paste from history with [multiclip](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip)

### File

- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>f</kbd>: Go to File...
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>ctrl</kbd> + <kbd>f</kbd>: Open File
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>s</kbd>: Save All

### Editor

- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>2</kbd>: Split Editor Vertically
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>3</kbd>: Split Editor horizontally
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>o</kbd>: Focus Next Editor Group
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>b</kbd>: Quick Switch Editor in Group
- <kbd>ctrl</kbd> + <kbd>0</kbd>: Close Current Editor
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>0</kbd>: Close All Editor
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>0</kbd>: Close Other Editor

## IDE Features

### Basic rule

- <kbd>ctrl</kbd> + <kbd>?</kbd>: [Common](#common)
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>?</kbd>:
  [Code Operations](#code-operations), e.g. Generation, Refactoring
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>?</kbd>: [Jump](#jump)
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>?</kbd>:
  [Display, Inspect or Peek informations](#display-inspect-or-peek-informations)
- <kbd>alt</kbd> + <kbd>number</kbd>: [Code Folding](#code-folding)
- <kbd>alt</kbd> + <kbd>number</kbd>: [Views](#views)
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>number</kbd>: [Git Operations](#git-operations)
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>?</kbd>: [Misc](#misc)

### Common

- <kbd>ctrl</kbd> + <kbd>/</kbd>: Suggest
- <kbd>ctrl</kbd> + <kbd>r</kbd>: (R)ename Symbol
- <kbd>ctrl</kbd> + <kbd>s</kbd>: (S)earch
- <kbd>ctrl</kbd> + <kbd>c</kbd>: Toggle Line (C)omment
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>c</kbd>: Toggle Block (C)omment

### Code Operations

- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>r</kbd>: (R)efactor...
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>l</kbd>: (L)int, i.e. Format Document
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>f</kbd>: Quick (F)ix...
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>s</kbd>: (S)ource ACtion...
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>o</kbd>: Organize Imports

### Jump

- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>b</kbd>: Go (B)ack
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>f</kbd>: Go (F)orward
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>g</kbd>: (G)o to Definition
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>d</kbd>: Go to (D)eclaration
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>i</kbd>: Go to (I)mplementations
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>r</kbd>: Go to (R)eferences
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>t</kbd>: Go to (T)ype Definition
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>n</kbd>: Go to (N)ext Problem
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>n</kbd>: Go to (N)ext Problem in Files
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>p</kbd>: Go to (P)revious Problem
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>: Go to (P)revious Problem in Files
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>s</kbd>: Go to (S)ymbol in Editor...
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>s</kbd>: Go to (S)ymbol in Workspace...
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>l</kbd>: Go to (L)ast Edit Location
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>e</kbd>: Go to (E)ditor
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>j</kbd>: Open Breadcrumbs and Selet and (J)ump

### Display Inspect or Peek Informations

- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>d</kbd>: Peek (D)efinition
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>i</kbd>: Peek (I)mplementations
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>r</kbd>: Peek (R)eferences
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>t</kbd>: Peek (T)ype Definition
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>h</kbd>: Show (H)over
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>: (P)arameter Hints
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>c</kbd>: Show (C)all Hierarchy

### Code Folding

- <kbd>ctrl</kbd> + <kbd>.</kbd>: Fold
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>.</kbd>: Fold All
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>.</kbd>: Fold Recursively
- <kbd>ctrl</kbd> + <kbd>,</kbd>: Unfold
- <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>,</kbd>: Unfold All
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>,</kbd>: Unfold Recursively

### Views

- <kbd>alt</kbd> + <kbd>0</kbd>: Toggle Side Bar
- <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>0</kbd>: Toggle Panel Bar
- <kbd>alt</kbd> + <kbd>1</kbd>: Show File Explorer
- <kbd>alt</kbd> + <kbd>2</kbd>: Show Comment Anchors
- <kbd>alt</kbd> + <kbd>4</kbd>: Toggle Debug Console
- <kbd>alt</kbd> + <kbd>5</kbd>: Toggle Problems
- <kbd>alt</kbd> + <kbd>8</kbd>: Toggle Terminal
- <kbd>alt</kbd> + <kbd>9</kbd>: Toggle Source Control

### Git Operations

- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>4</kbd>: View Git Graph (git log)
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>5</kbd>: Git Checkout to...
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>6</kbd>: Git Fetch (Prune)
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>7</kbd>: Git Pull
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>8</kbd>: Git Commit All
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>9</kbd>: Git Push
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>0</kbd>: Git Discard All Changes

### Misc

- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>o</kbd>: Run Task
- <kbd>ctrl</kbd> + <kbd>x</kbd>, <kbd>o</kbd>: Run Debugging
