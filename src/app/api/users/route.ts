
import { NextResponse } from 'next/server'
// https://nextjs.org/docs/app/api-reference/functions/next-response


// si tuviera params
// ej: api/[team]/route.ts
//
// type Params = {
//   team: string
// }
//
// export async function GET(req: Request, context: { params: Params }) {
//   const team = context.params.team // '1'
// }


 
export async function GET(req: Request) {
  return NextResponse.json({ 
    url: "api/users",
    users: [{
      id: 1,
      name:"John Doe" },
      {
        id: 3,
        name:"Mary Jane" }],
  }, { status: 200 })
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  return NextResponse.redirect(new URL('/new', req.url))
}

export async function HEAD(req: Request) {}
 
export async function POST(req: Request) {}
 
export async function PUT(req: Request) {}
 
export async function DELETE(req: Request) {}
 
export async function PATCH(req: Request) {}

