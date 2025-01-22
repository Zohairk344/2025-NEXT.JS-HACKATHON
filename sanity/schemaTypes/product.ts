import { defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string",
        },
        {
            name: "description",
            type: "text",
            validation: (rule) => rule.required(),
            title: "Description",
        },
        {
            name: "imageurl",
            type: "image",
            title: "Product Image",
            validation: (rule) => rule.required(), // Ensure the field is required
            options: {
                hotspot: true, // Optional: Enable hotspot for responsive images
            },
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required().positive(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }],
        },
        {
            name: "discountprice",
            type: "number",
            title: "Discount Price",
        },
        {
            name: "id",
            type: "number",
            title: "ID",
            validation: (rule) => rule.positive().integer().required(),
        },
        {
            name: "isNew",
            type: "boolean",
            title: "New Badge",
        },
        {
            name: "priceWithoutDiscount",
            type: "number",
            title: "Price Without Discount",
        },       
    ],
});