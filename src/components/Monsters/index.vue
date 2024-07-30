<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { getMonsters, setBattle, type MONSTER } from './api'
import { getImageUrl } from '@/utils/getImageUrl'
import Button from '@/components/Button/index.vue'
import CardMonster from '@/components/CardMonster/index.vue'

const loading: Ref<boolean> = ref(false)
const monsters = ref<MONSTER[]>([])
const monsterSelected = ref<MONSTER | null>(null)
const randomMonsterSelected = ref<MONSTER | null>(null)
// const winner = ref<MONSTER | null>(null)

// const monsterMocked = {
//   id: 'monster-1',
//   name: 'Dead Unicorn',
//   attack: 60,
//   defense: 40,
//   hp: 10,
//   speed: 80,
//   type: 'Type',
//   imageUrl: 'images/dead-unicorn.png'
// }
const error = ref(null)

async function fetchData() {
  error.value = null
  loading.value = true

  try {
    monsters.value = await getMonsters()
  } catch (err: any) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}

const selectMonster = (currentMonster: MONSTER) => {
  monsterSelected.value = currentMonster
}

const startBattle = async () => {
  randomMonsterSelected.value = monsters.value[Math.floor(Math.random() * monsters.value.length)]
  console.log(randomMonsterSelected.value.id)
  console.log(monsterSelected.value?.id)
  await setBattle()
}

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <div class="mt-4">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div class="grid grid-cols-5 gap-4">
      <button
        v-for="monster in monsters"
        :key="monster.id"
        @click="selectMonster(monster)"
        class="bg-white drop-shadow-lg border border-transparent hover:border-black focus:border-black px-2 py-2 rounded-md w-[150px] h-[140px]"
      >
        <img :src="getImageUrl(monster.imageUrl)" :alt="monster.name" class="w-full h-auto" />
        <p class="mt-1 text-left">
          {{ monster.name }}
        </p>
      </button>
    </div>

    <div class="bg-[#E1F8FF] p-4 text-2xl border border-black mt-10 rounded-md">
      Dead Unicor Wins!
    </div>

    <div class="mt-8 flex items-center justify-start gap-6">
      <CardMonster :monster="monsterSelected" cardText="Player" />
      <Button @click="startBattle" :disabled="!monsterSelected" />
      <CardMonster :monster="randomMonsterSelected" cardText="Computer" />
    </div>
  </div>
</template>
