import { defineType } from "sanity";

export default defineType({
    title: "Event",
    name: "event",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Event Name",
            type: "string",
        },
        {
            name: "description",
            title: "Event Description",
            type: "text",
        },
        {
            name: "date",
            title: "Date",
            type: "datetime",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: "link",
            title: "Link",
            type: "url",
        }
    ],
});