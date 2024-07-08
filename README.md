# react-drop-down

A simple React drop-down component.

## Features

- Lightweight and easy to use
- Written in TypeScript
- Customizable styles with SCSS

## Installation

To install the package, use the following command:

```bash
pnpm install react-drop-down
```

## Usage

Here's a basic example of how to use the drop-down component:

```typescript
import React from "react";
import DropDown from "react-drop-down";

function App() {
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="App">
      <h1>React Drop Down Example</h1>
      <DropDown options={options} />
    </div>
  );
}

export default App;
```
