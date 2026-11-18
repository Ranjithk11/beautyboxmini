const WEBHOOK_URL = 'https://hook.eu1.make.com/l35iie6ib0pdzol0hlv7jztdeonumrkg';

export async function POST(request) {
  const body = await request.json();
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
