import { schema } from 'normalizr'

export const postSchema = new schema.Entity('post', {}, { idAttribute: '_id' })

export const postSchemaList = [postSchema]
