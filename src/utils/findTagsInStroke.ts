export const template = /#\b[a-z-0-9]+\b/gi

export const findTagsInStroke = (noteText: string) => {
  const result = noteText.match(template)

  return result ? Array.from(new Set(result)) : []
}
