import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["home-page"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
