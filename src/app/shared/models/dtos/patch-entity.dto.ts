export type PatchEntityDto = {
  key: string;
  valueKey: string | number;
  patchData: PatchData[]
}

export type PatchData = {
  key: string;
  value: any;
}
