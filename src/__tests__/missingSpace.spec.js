import { expect, test, describe } from 'vitest'

import { processCommitMessage } from '../commit-log-processor'
import { rulesConfig } from '../rules-configs'

const regexMissingSpace = rulesConfig.find(rule => rule.id === 'MissingSpace')?.regex

describe('A space is required after colon', () => {
  test('Should generate a valid Output, the arrow is positioned after colon', () => {
    const [, log] = processCommitMessage(`feat:some feat`, false)
    expect(log).toMatchInlineSnapshot(`
      "
      feat:some feat
           ↑
           ┆
           ╵--- Space after the colon is required.

      "
    `)
  })

  describe.concurrent('Some cases are deliberately ignored to anticipate a possible problem in the rendering.', () => {
    test.concurrent('Should not match', () => {
      // Deliberately ignored
      expect(' '.match(regexMissingSpace)?.groups?.position).toBeUndefined()
      expect(': '.match(regexMissingSpace)?.groups?.position).toBeUndefined()
      expect(': Update documentation'.match(regexMissingSpace)?.groups?.position).toBeUndefined()

      // Need to be ignored
      expect('docs: '.match(regexMissingSpace)?.groups?.position).toBeUndefined()
      expect('docs: Update documentation'.match(regexMissingSpace)?.groups?.position).toBeUndefined()
      expect('docs!: Update documentation'.match(regexMissingSpace)?.groups?.position).toBeUndefined()
      expect('docs(foo): '.match(regexMissingSpace)?.groups?.position).toBeUndefined()
      expect('docs(foo): Update documentation'.match(regexMissingSpace)?.groups?.position).toBeUndefined()
      expect('docs(foo)!: Update documentation'.match(regexMissingSpace)?.groups?.position).toBeUndefined()
    })
  })

  test.concurrent('Should match', () => {
    expect('docs:'.match(regexMissingSpace)?.groups?.position).toBe('')
    expect('docs:!'.match(regexMissingSpace)?.groups?.position).toBe('')

    expect('docs:Update documentation'.match(regexMissingSpace)?.groups?.position).toBe('')
    expect('docs!:Update documentation'.match(regexMissingSpace)?.groups?.position).toBe('')

    expect('docs(foo):Update documentation'.match(regexMissingSpace)?.groups?.position).toBe('')
    expect('docs(foo)!:Update documentation'.match(regexMissingSpace)?.groups?.position).toBe('')

    expect('docs(foo):'.match(regexMissingSpace)?.groups?.position).toBe('')
    expect('docs(foo)!:'.match(regexMissingSpace)?.groups?.position).toBe('')

    expect('doas(foo)!:Update documentation'.match(regexMissingSpace)?.groups?.position).toBe('')
  })
})
