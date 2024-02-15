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
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "techStack",
            title: "Tech Stack",
            type: "text",
        }),
    ],
});