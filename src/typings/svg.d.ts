declare module '*.svg' {
  const content: string;
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}