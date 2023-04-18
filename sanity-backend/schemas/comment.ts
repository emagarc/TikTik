import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'postedBy',
            title: 'Posted By',
            type: 'postedBy',
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'string',
        }),
    ],
});
