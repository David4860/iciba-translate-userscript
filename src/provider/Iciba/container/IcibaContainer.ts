import { createComponent, computed } from '@vue/composition-api'

import { got } from '~/util/gmapi'
import Scrollable from '~/components/Scrollable/Scrollable.vue'
import play_speaker_filled_audio_tool_59284 from '~/assets/img/play/speaker-filled-audio-tool_59284.svg'

import containerData from '../containerData'
import { audioCacheService } from '~/service/audioCache'

export default createComponent({
  name: 'IcibaContainer',
  components: {
    Scrollable,
  },
  setup: () => {
    const seperateChineseJieshi = (s: string) => {
      const match = /[（(](.{1,3})[）)](.+)/.exec(s)
      if (match) {
        return [match[1], match[2]]
      }
      return ['', s]
    }

    const handlePlay = async (mp3Url: string): Promise<void> => {
      const volume = 0.6

      if (audioCacheService.play(mp3Url, volume)) {
        return
      }

      const response = await got<ArrayBuffer>({
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Referer': 'http://www.iciba.com/',
          'User-Agent': window.navigator.userAgent,
        },
        responseType: 'arraybuffer',
        url: mp3Url,
        timeout: 5000,
      })
      audioCacheService.play(mp3Url, response.response, volume)
    }

    return {
      icon: {
        play_speaker_filled_audio_tool_59284,
      },
      result: computed(() => containerData.data),
      seperateChineseJieshi,
      handlePlay,
    }
  },
})
