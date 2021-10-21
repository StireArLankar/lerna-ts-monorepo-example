import { MyObject } from './example'
import { SomeTitleHere } from './result'

type keysWithDifference = {
  [K in keyof MyObject]: MyObject[K] extends SomeTitleHere[K] ? never : K
}[keyof MyObject]

export type comparsion = {
  [K in keysWithDifference]: [MyObject[K], SomeTitleHere[K]]
}
