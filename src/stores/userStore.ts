import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'userStore',
  () => {
    const nickname = ref('')
    const email = ref('')
    const avatar = ref('/defaultProfile.jpg')

    function setNickname(this: any, nickname?: string) {
      this.nickname = nickname
    }

    function setEmail(this: any, email?: string) {
      this.email = email
    }

    function setAvatar(this: any, avatar?: string) {
      this.avatar = avatar
    }

    return {
      nickname,
      email,
      avatar,
      setNickname,
      setEmail,
      setAvatar
    }
  },
  { persist: { storage: sessionStorage } }
)
