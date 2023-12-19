import { expect, test, describe } from 'vitest'

import { rulesConfig } from '../rules'

const regexEmptyDescription = rulesConfig.find(rule => rule.id === 'EmptyDescription')?.regex

describe.concurrent('Empty Description', () => {
  test.concurrent('not', () => {
    expect('Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs() documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs(foo) documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs () documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs (foo) documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()

    expect('docs: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs : Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs foo: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs!: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs!: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs! : Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs! foo: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()

    expect('docs(): Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs(): Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs() : Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs() foo: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs()!: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs()!: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs()! : Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
    expect('docs()! foo: Update documentation'.match(regexEmptyDescription)?.groups?.position).toBeUndefined()
  })

  test.concurrent('match', () => {
    expect('docs:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs :'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs foo:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs():'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs() :'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs() foo:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo):'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo) :'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo) foo:'.match(regexEmptyDescription)?.groups?.position).toBe('')

    expect('docs!:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs !:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs foo!:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs()!:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs() !:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs() foo!:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo)!:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo) !:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo) foo!:'.match(regexEmptyDescription)?.groups?.position).toBe('')

    expect('docs! :'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs! foo:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs()!:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs()! :'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs()! foo:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo)!:'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo)! :'.match(regexEmptyDescription)?.groups?.position).toBe('')
    expect('docs(foo)! foo:'.match(regexEmptyDescription)?.groups?.position).toBe('')
  })
})
