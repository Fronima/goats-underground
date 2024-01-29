import { apiVersion, projectId, dataset, useCdn } from './env'
import { createClient } from '@sanity/client'



export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: useCdn,
    apiVersion: apiVersion,
})

export async function getProjects() {
    return await client.fetch(`*[_type == "project"]`)
}

export async function getAbout() {
    return await client.fetch(`*[_type == "about"]`)
}

export async function getHomepageHeader() {
    return await client.fetch(`*[_type == "homepageInfo"]`)
}

