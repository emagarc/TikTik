import { defineField, defineType, FileOptions } from 'sanity';

interface CustomFileOptions extends FileOptions {
  hotspot?: boolean
};

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        hotspot: true,
      } as CustomFileOptions, // personalized type
    }),
    defineField({
      name: 'userId',
      title: 'UserId',
      type: 'string',
    }),
    defineField({
      name: 'postedBy',
      title: 'Posted By',
      type: 'postedBy',
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'user' } }],
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'comment' }]
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      caption: 'caption',
      video: 'video.asset',
      userId: 'userId',
      likes: 'likes',
      comments: 'comments',
      topic: 'topic'
    },
    prepare(selection) {
      const { caption } = selection
      return { ...selection, subtitle: caption && `Caption: ${caption}` }
    },
  },
});
