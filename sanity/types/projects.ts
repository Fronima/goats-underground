import { defineType, defineField } from "sanity";

export default defineType({
    title: "Portfolio Projects",
    name: "project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: "url",
            title: "URL",
            type: "url",
        }),
    ],
});