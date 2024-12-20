import { type SchemaTypeDefinition } from 'sanity'
import { author } from '@/sanity/schemaTypes/author'
import { question } from '@/sanity/schemaTypes/question'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, question],
}
