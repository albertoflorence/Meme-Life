import { schema } from 'normalizr'

export const commentSchema = new schema.Entity(
  'comment',
  {},
  { idAttribute: '_id' }
)

export const commentSchemaList = [commentSchema]
