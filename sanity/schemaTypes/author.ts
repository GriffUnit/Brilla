import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType( {
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField( {
            name: 'id',
            type: 'number'
        }),
        defineField( {
            name: 'name',
            type: 'string'
        }),
        defineField( {
            name: 'username',
            type: 'string'
        }),
        defineField( {
            name: 'email',
            type: 'string'
        }),
        defineField( {
            name: 'image',
            type: 'image'
        }),
        defineField( {
            name: 'totalQuestions',
            type: 'number'
        }),
        defineField( {
            name: 'totalAnswers',
            type: 'number'
        }),
        defineField( {
            name: 'totalPosts',
            type: 'number'
        }),
        defineField( {
            name: 'backgroundImage',
            type: 'image'
        }),
        defineField( {
            name: 'totalViews',
            type: 'number'
        }),
        defineField( {
            name: 'bio',
            type: 'text'
        })
    ],
    preview: {
        select: {
            title: 'name',
        }
    }

})