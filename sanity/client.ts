import 'server-only'
import { apiVersion, projectId, dataset, useCdn } from './env'
import { createClient, type QueryParams } from '@sanity/client'



export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: useCdn,
    apiVersion: apiVersion,
})

const dataRevalidation = process.env.DATA_REVALIDATION ?? 3600

export async function sanityFetch<QueryParams>({query, params, tags}: {query: string, params?:QueryParams, tags?:string[]}) {
    return await client.fetch(query, params ?? {}, {
        next: {
             tags 
            }
        })
}

export async function getProjects() {
    return await sanityFetch({
        query:`*[_type == "project"]`,
        tags: ['projects']
    })
}


export async function getAbout() {
    return await sanityFetch({
        query:`*[_type == "about"]`,
        tags: ['about']
    })
}

export async function getHomepageHeader() {
    return await sanityFetch({
        query:`*[_type == "homepageInfo"]`,
        tags: ['homepageInfo']
    })
}

