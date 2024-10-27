import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { exists, BaseDirectory } from '@tauri-apps/plugin-fs';

import "./App.css";

export default function App() {


  async function onClick() {
    console.log("AQUI");
    // const entries = await readDir("users", {dir: })
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>
      <button onClick={onClick}>Click</button>
    </main>
  );
}
