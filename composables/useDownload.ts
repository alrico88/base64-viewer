import fileSaver from "file-saver";
const { saveAs } = fileSaver;

export function useDownload(content: Blob, filename: string): void {
  return saveAs(content, filename);
}
