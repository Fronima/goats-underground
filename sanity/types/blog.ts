import { defineType } from "sanity";

export default defineType({
    title: "Blog Posts",    // Title of the type
    name: "blog",           // Identifier of the type
    type: "document",       // Type of the document
    fields: [               // Fields of the document
        {
            name: "title",  // Name of the field
            title: "Title",  // Title of the field
            type: "string", // Type of the field
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
            name: "date",
            title: "Date",
            type: "datetime",
        },
        {
            name: "author",
            title: "Author",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ],
});