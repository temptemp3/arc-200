declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "nfdjs" {
  export function getNFDByName(name: string): Promise<any>;
  export function getNFDByAddress(address: string): Promise<any>;
  export function getNFDByAddressBatch(data: string[]): Promise<any>;
  export function getNFDs(): any;
}

declare module "arccjs";
declare module "swap200js";
