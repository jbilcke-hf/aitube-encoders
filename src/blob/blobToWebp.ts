import { addBase64Header } from "../base64/addBase64Header"

export async function blobToWebp(blob: Blob) {
  return addBase64Header(Buffer.from(await blob.text()).toString('base64'), "webp")
}