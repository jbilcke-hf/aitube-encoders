import { addBase64Header } from "../base64/addBase64Header"

export async function bufferToWebm(buffer: Buffer) {
  return addBase64Header(buffer.toString('base64'), "webm")
}