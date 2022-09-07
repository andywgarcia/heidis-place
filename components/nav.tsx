import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div style={{ display: "grid", gap: "4px" }}>
      <Link href="/">Home</Link>
      <Link href="/distinctive-framing">Distinctive Framing</Link>
      <Link href="/needlework-specialist">Needlework Specialist</Link>
      <Link href="/unique-touch">A Unique Touch</Link>
      <Link href="/quality">Quality</Link>
    </div>
  );
}
