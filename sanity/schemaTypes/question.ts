import { defineField, defineType } from "sanity";

export const question = defineType( {
    name: 'question',
    title: 'Question',
    type: 'document',
    fields: [
        defineField( {
            name: 'topic',
            type: 'string',
        }),
        defineField( {
            name: 'slug',
            type: 'slug',
            options: {
                source: 'topic'
            }
        }),
        defineField( {
            name: 'author',
            type: 'reference',
            to: {type: 'author'},
        }),
        defineField( {
            name: 'views',
            type: 'number',
        }),
        defineField( {
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.min(1).max(20).required().error('Please enter a category')
        }),
        defineField( { 
            name: 'image',
            type: 'image',
        }),
        defineField( {
            name: 'description',
            type: 'markdown', 
            validation: (Rule) => Rule.required(),
        }), 
       
    ],
  
})