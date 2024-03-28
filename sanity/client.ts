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
        tags: ['project']
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

export type Event = {
    name: string,
    description: string,
    date: string,
    image: string,
    location: string,
    link: string,
  }

export async function getEvents() {
    return await sanityFetch({
        query:`*[_type == "event"]`,
        tags: ['event']
    })
}

export async function getLandingpageSection() {
    return await sanityFetch({
        query:`*[_type == "landingPageSection"]`,
        tags: ['landingPageSection']
    })
}

export type Contact = {
    title: string,
    description: string,
    email: string,
    phone: string,
    address: string,
  }

export async function getContact() {
    return await sanityFetch({
        query:`*[_type == "contact"]`,
        tags: ['contact']
    })
}

export type Collaborator = {
    name: string,
    description: string,
    image: string,
    link: string,
  }

export async function getCollaborators() {
    return await sanityFetch({
        query:`*[_type == "collaborator"]`,
        tags: ['collaborator']
    })
}

export type Photo = {
    title: string,
    description: string,
    image: string,
  }

export async function getPhotos() {
    return await sanityFetch({
        query:`*[_type == "photo"]`,
        tags: ['photo']
    })
}

export type Blog = {
    title: string,
    description: string,
    image: string,
    date: string,
    author: string,
    content: string[],
    slug: any,
}

export async function getAllBlogs() {
    return await sanityFetch({
        query:`*[_type == "blog"]`,
        tags: ['blog']
    })
}

export async function getBlog(slug: string) {
    return await sanityFetch({
        query:`*[_type == "blog" && slug.current == $slug]`,
        params: {slug},
        tags: ['blog']
    })
}


