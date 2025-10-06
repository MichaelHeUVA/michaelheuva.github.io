import React from "react";

export default function Footer() {
  return (
    <footer className="text-center pt-12 pb-8">
      <p className="text-sm text-muted-foreground">
        Designed and Built by Michael He • {new Date().getFullYear()}
      </p>
    </footer>
  );
}
