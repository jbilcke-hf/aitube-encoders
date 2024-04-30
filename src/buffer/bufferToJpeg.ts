import { addBase64Header } from "../base64/addBase64Header"

export async function bufferToJpeg(buffer: Buffer) {
  return addBase64Header(buffer.toString('base64'), "jpeg")
}