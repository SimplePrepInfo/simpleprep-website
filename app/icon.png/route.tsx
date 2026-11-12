import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const size = { width: 512, height: 512 };
export const dynamic = 'force-static';

export async function GET() {
  const crest = await readFile(path.join(process.cwd(), 'public/brand/simple-prep-crest.png'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#173f30',
        }}
      >
        {/* Keep the entire crest inside circular search-result crops. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${crest.toString('base64')}`}
          alt=""
          width={360}
          height={417}
        />
      </div>
    ),
    size,
  );
}
