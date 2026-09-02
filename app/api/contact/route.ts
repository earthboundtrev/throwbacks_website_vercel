import { NextRequest, NextResponse } from "next/server"
import {
  clientIpFromHeaders,
  createRateLimiter,
  handleContactForm,
} from "@/lib/contact-form.js"

const MAX_BODY_BYTES = 32 * 1024
const rateLimiter = createRateLimiter()

export async function POST(request: NextRequest) {
  const rawBody = await request.text()
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Form submission is too large" }, { status: 413 })
  }

  let payload: unknown
  try {
    payload = rawBody ? JSON.parse(rawBody) : {}
  } catch {
    return NextResponse.json({ error: "Invalid form submission" }, { status: 400 })
  }

  const headers = Object.fromEntries(request.headers.entries())
  const result = await handleContactForm(payload, {
    ip: clientIpFromHeaders(headers),
    rateLimiter,
  })

  return new NextResponse(result.body, {
    status: result.statusCode,
    headers: result.headers,
  })
}
