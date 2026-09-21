import { sql } from "@vercel/postgres";

export interface Project {
    id: number
    title: string
    description: string
    type: 'opensource' | 'school'
    technologies: string[]
    link?: string
}

const ITEMS_PER_PAGE = 6;

export async function getProjects(type?: string | null): Promise<Project[]> {
    if (type) {
        const { rows } = await sql<Project>`
            SELECT * 
            FROM projects 
            WHERE type = ${type} 
            ORDER BY id
        `
        return rows
    }
    const { rows } = await sql<Project>` SELECT * FROM projects ORDER BY id`
    return rows 
}

export async function getFilteredProjects(
    query: string,
    currentPage: number
): Promise<Project[]> {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE
    const { rows } = await sql<Project>`
        SELECT * 
        FROM projects
        WHERE title ILIKE ${'%' + query + '%'}
            OR description ILIKE ${'%' + query + '%'}
            OR EXISTS (
                SELECT 1 FROM unnest(technologies) AS tech
                WHERE tech ILIKE ${'%' + query + '%'}
            )
        ORDER BY ID
        LIMIT ${ITEMS_PER_PAGE}
        OFFSET ${offset}
    `
    return rows 
}

// export default async function getProjectsPages(query: string): Promise<number> {
    // const patter = `%${query}`
// 
    // const { rows } = await sql`
        // SELECT COUNT(*) AS count
        // FROM projects
        // WHERE title ILIKE ${patter}
            // OR description ILIKE ${patter}
            // )
    // `
    // return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE)
// }

export async function getProjectsPages(query: string): Promise<number> {
  const pattern = `%${query}%`;

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE title ILIKE ${pattern}
       OR description ILIKE ${pattern}
  `;

  return Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
}

export async function getProjectById(id: number): Promise<Project> {
    const { rows } = await sql<Project>`
        SELECT * FROM projects WHERE id = ${id}
    `
    return rows[0] ?? null
}