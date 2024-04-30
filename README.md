# @aitube/encoders

*Collection of blob, buffer and base64 utilities. Used by AiTube.at*

## ATTENTION

AiTube is currently in heavy development, so this library is experimental,
and may be subject to unannounced breaking changes.

We are sorry for any inconvenience this might cause.

## Installation

To install the package, run the following command:

```bash
npm install @aitube/encoders
```

## Getting Started

```typescript
import {
  addBase64Header,
  extractBase64,
  blobToWebp,
  dataUriToBlob,
  bufferToHeic,
  bufferToJpeg,
  bufferToMp3,
  bufferToMp4,
  bufferToPng,
  bufferToWav,
  bufferToWebm,
  bufferToWebp
} from '@aitube/encoders'

```

## Build Instructions

Install [Bun](https://bun.sh/)

Run the following commands:

```bash
bun install

bun run build
```

To publish:

```bash
bun run build

bun run build:declaration

bun run publish
```

## Contributing

We welcome contributions! Please feel free to submit a pull request.

## License

This package is under the MIT License. See `LICENSE` file for more details.
