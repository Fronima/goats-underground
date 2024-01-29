import { defineType, defineField } from "sanity";

export default defineType({
    title: "Homepage Info",
    name: "homepageInfo",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
    ],
});