import { defineType, defineField } from "sanity";

export default defineType({
    title: "Landing Page Section",
    name: "landingPageSection",
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
