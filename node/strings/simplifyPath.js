// Given a string path, which is an absolute path (starting with a slash '/')
// to a file or directory in a Unix-style file system, convert it to the
// simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a
// double period '..' refers to the directory up a level, and any multiple
// consecutive slashes (i.e. '//') are treated as a single slash '/'.
// For this problem, any other format of periods such as '...' are treated as
// file/directory names.
//
// Example:
//    simplifyPath('/home') => '/home'
//    simplifyPath('/../') => '/'
//    simplifyPath('/home//foo/') => '/home/foo'
//    simplifyPath('/home//./foo/') => '/home/foo'
const simplifyPath = (path) => {
  const pathSplit = path.split('/')

  let result = []
  for (const item of pathSplit) {
    if (item === '' || item === '.') continue
    if (item === '..') {
      result.pop()
      continue
    }

    result.push(item)
  }

  return '/' + result.join('/')
}

describe("String", () => {
  it("should simplify path", () => {
    expect(simplifyPath('/home')).toEqual('/home')
    expect(simplifyPath('/home/')).toEqual('/home')
    expect(simplifyPath('/../')).toEqual('/')
    expect(simplifyPath('/home//foo/')).toEqual('/home/foo')
    expect(simplifyPath('/home//./foo/')).toEqual('/home/foo')
  })
})