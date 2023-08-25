import { saveAs } from "file-saver";

export function useDownload(content: Blob, filename: string): void {
  return saveAs(content, filename);
}
