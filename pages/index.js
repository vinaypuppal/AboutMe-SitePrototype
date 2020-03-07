import React from "react";
import Link from "next/link";

export default () => (
  <main>
    <h1>Hello!</h1>

    <Link href="/about">
      <a>About</a>
    </Link>
  </main>
);
