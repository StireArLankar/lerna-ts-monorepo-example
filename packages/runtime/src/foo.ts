import Bar from './bar'
import minimist from 'minimist'
import { test } from '~/test/test'

console.log(process.argv)

interface Args {
  option: string
  verbose: boolean
}

const argv = minimist<Args>(process.argv.slice(2), {
  default: { option: 'bar', verbose: false },
})

console.log(argv)

console.log({ test })

Bar()
