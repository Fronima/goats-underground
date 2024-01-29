import { defineField, defineType } from "sanity";

export default defineType({
    title: "About",
    name: "about",
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
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
});