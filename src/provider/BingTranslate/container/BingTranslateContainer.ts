import { createComponent, reactive } from '@vue/composition-api'
import { bus, EVENTS } from '~/service/globalBus'
import Scrollable from '~/components/Scrollable/Scrollable.vue'
import { PROVIDER } from '~/constants/constant'

import { BING_LANGUAGE_MAP, BING_LANGUAGES } from '~/constants/bingLanguages'
import play_speaker_filled_audio_tool_59284 from '~/assets/img/play/speaker-filled-audio-tool_59284.svg'

import containerData from '../containerData'
import GoogleTranslateBus, { NAMES } from '../bus'


const languages = Object.entries(BING_LANGUAGE_MAP)
  .map(([id, name]) => ({ id: id as BING_LANGUAGES, name }))

const icon = {
  play_speaker_filled_audio_tool_59284,
}

export default createComponent({
  name: 'BingTranslateContainer',
  components: { Scrollable },
  setup: () => {
    const state = reactive({
      visible: false,
      type: 'source' as 'source' | 'target',
    })

    const getLanguage = (language: BING_LANGUAGES) => BING_LANGUAGE_MAP[language] || language

    const handleLanguageSelect = (language: BING_LANGUAGES | 'auto') => {
      bus.emit({
        type: EVENTS.TRANSLATE,
        word: containerData.inputText,
        param: {
          provider: PROVIDER.BING_TRANSLATE,
          param: {
            sl: state.type === 'source' ? language : containerData.sourceLanguage,
            tl: state.type === 'target' ? language : containerData.targetLanguage,
          },
        },
      })

      state.visible = false
    }

    const showLanguageSelect = (type: 'source' | 'target') => {
      state.type = type
      state.visible = true
    }

    const handlePlay = (type: 'source' | 'target') => {
      GoogleTranslateBus.emit(
        NAMES.PLAY_AUDIO,
        type === 'source'
          ? {
            word: containerData.inputText,
            tl: containerData.detectedLanguage,
          }
          : {
            word: containerData.data.join(' '),
            tl: containerData.targetLanguage,
          },
      )
    }

    return {
      state,
      containerData,
      languages,
      icon,

      getLanguage,
      handleLanguageSelect,
      showLanguageSelect,
      handlePlay,
    }
  },
})