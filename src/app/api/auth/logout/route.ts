import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/?logout=1', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'set-Cookie': `token=; path=/; max-age=0`,
    },
  })
}
