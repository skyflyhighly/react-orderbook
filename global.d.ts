// global.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    div: React.HTMLProps<HTMLDivElement>;
    span: React.HTMLProps<HTMLSpanElement>;
    input: React.HTMLProps<HTMLInputElement>;
    button: React.HTMLProps<HTMLButtonElement>;
  }
}
