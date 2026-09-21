import { getProjects } from "@/lib/projects-db";
import { NextResponse } from "next/server";

export async function GET(request:NextResponse) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const projects = await getProjects(type)
    return NextResponse.json(projects)
}