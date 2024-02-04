import { defineType } from "sanity";

export default defineType({
    title: "Contact",
    name: "contact",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "phone",
            title: "Phone",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
    ],
});