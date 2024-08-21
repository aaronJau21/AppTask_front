import {z} from 'zod'


export const projectSchema = z.object({
    _id: z.string(),
    projectName: z.string(),
    clientName: z.string(),
    description: z.string(),
})

export type Project = z.infer<typeof projectSchema>
export type ProjectFOrmData = Pick<Project, 'clientName' | 'projectName' | 'description'>