"use client"
import { useState } from "react";

export default function contactPage() {
   
  const [msgs, setMsgs] = useState([
    {sender: "P. Thong", msg: "Hello world!" },
    {sender: "P. Thong", msg: "Hello world!" },
  ]);

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>contact</h1>
        <h1>{msgs[1].sender}</h1>
      </main>
    );
  }
