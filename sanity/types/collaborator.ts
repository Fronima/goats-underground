import { defineType } from "sanity";

export default defineType({
    title: "Collaborator",
    name: "collaborator",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "link",
            title: "Link",
            type: "url",
        }
    ],
});
