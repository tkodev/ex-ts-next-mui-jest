import { createTheme } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { EmotionCache } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

const createEmotionCache = () => {
  const emotionCache = createCache({ key: 'css', prepend: true })
  return emotionCache
}

const createEmotionTags = (emotionCache: EmotionCache, html: string) => {
  const { extractCriticalToChunks } = createEmotionServer(emotionCache)
  const emotionStyles = extractCriticalToChunks(html)
  const emotionTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))
  return emotionTags
}

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export { theme, createEmotionCache, createEmotionTags }
