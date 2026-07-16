import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
  <nav>
    <div>
        <h1>Student Manager</h1>
        <div>
            <Link href="/">Home</Link>
            <Link href="/students">Students</Link>
        </div>
    </div>
  </nav>
  );
}

export default Navbar;
