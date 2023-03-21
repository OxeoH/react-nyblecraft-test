export const template = /#\b[a-z-0-9]+\b/gi

// \b - граница слова
// /a+/ соответствует 'a' в "candy" и всем символам 'a' в "caaaaaaandy"
// /gi глобальный поиск и игнор регистра

export const findTagsInStroke = (noteText: string) => {
  const result = noteText.match(template)

  return result ? result : []
}
