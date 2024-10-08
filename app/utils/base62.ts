const CHARSET =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function encodeBigIntToBase62(bigint: bigint): string {
  if (bigint === BigInt(0)) return CHARSET[0]
  let result = ''
  while (bigint > 0) {
    result = CHARSET[Number(bigint % BigInt(62))] + result
    bigint /= BigInt(62)
  }
  return result
}

function decodeBase62ToBigInt(base62String: string) {
  const base = BigInt(62)
  let result = BigInt(0)
  
  for (let i = 0; i < base62String.length; i++) {
    const char = base62String[i]
    const charIndex = CHARSET.indexOf(char)
    if (charIndex === -1) {
      throw new Error('Invalid character in base62 string')
    }
    result = result * base + BigInt(charIndex)
  }
  
  return result
}

// function decodeBase62ToBigInt(str: string): bigint {
//   return str
//     .split('')
//     .reverse()
//     .reduce((acc, char, index) => {
//       const value = BigInt(CHARSET.indexOf(char))
//       return acc + value * BigInt(62) ** BigInt(index)
//     }, BigInt(0))
// }

export function hexToBase62(hex: string | undefined): string {
  return encodeBigIntToBase62(BigInt(hex))
}

export function base62ToHex(base62: string): string {
  const bigint = decodeBase62ToBigInt(base62)
  return '0x' + bigint.toString(16)
}
