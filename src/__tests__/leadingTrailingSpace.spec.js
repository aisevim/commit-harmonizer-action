import { expect, test, describe } from 'vitest'
import { regexLeadingTrailingSpace } from '../regex'

describe('Leading Trailing Space', () => {
  test("not", () => {
    expect("Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs() documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs(foo) documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs () documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs (foo) documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect(" Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect(" docs documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect(" docs() documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect(" docs(foo) documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect(" docs () documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect(" docs (foo) documentation".match(regexLeadingTrailingSpace)).toBeNull()

    expect("docs: Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs!: Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs! : Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs !: Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs ! : Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs(foo): Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs(foo)!: Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs(foo) !: Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs(foo)! : Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs(foo) ! : Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs(): Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs() : Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs()!: Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs() !: Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs()! : Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
    expect("docs() ! : Update documentation".match(regexLeadingTrailingSpace)).toBeNull()
  })
  
  test("match", () => {
    expect(" docs:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs():".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs()!:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')

    expect(" docs()! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs() !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs() ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs()!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs()foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs()foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
 
    expect(" docs ()! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs () !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs () ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs ()!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs ()foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs ()foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
   
    expect(" docsfooo() :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo()! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo() !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo() ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo()foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo()!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo()foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo()foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
 
    expect(" docsfooo () :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo () :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo () !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo () ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo) :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo)! :".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo) !:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo) ! :`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo ()foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo ()foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo)foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo)!foo:".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo)foo!:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo)foo!foo:`.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
 
    expect(" docs: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(): ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs()!: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
 
    expect(" docs()! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs() !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs() ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs()!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs()foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs()foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs(foo foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs(foo foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
 
    expect(" docs ()! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs () !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs () ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs ()!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs ()foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs ()foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docs (foo foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docs (foo foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
   
    expect(" docsfooo() : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo()! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo() !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo() ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo()foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo()!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo()foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo()foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo(foo foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo(foo foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
 
    expect(" docsfooo () : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo () : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo () !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo () ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo) : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo)! : ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo) !: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo) ! : `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo ()!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo ()foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo ()foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo)foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(" docsfooo (foo foo)!foo: ".match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo)foo!: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
    expect(` docsfooo (foo foo)foo!foo: `.match(regexLeadingTrailingSpace)?.groups?.position).toBe(' ')
  })
})
