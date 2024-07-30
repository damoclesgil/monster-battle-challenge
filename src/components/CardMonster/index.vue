<template>
  <div class="bg-white drop-shadow-lg w-[300px] h-auto rounded-md px-4 py-4" v-if="monster">
    <img
      :src="getImageUrl(monster.imageUrl)"
      :alt="monster.name"
      class="w-[283px] h-[178px] drop-shadow-md"
    />
    <p class="mt-4 text-left text-2xl border-b-2 pb-1 border-gray-dark">
      {{ monster.name }}
    </p>

    <div class="my-3">
      <p class="text-left">HP</p>
      <div class="w-full bg-gray-dark rounded-full h-2.5 shadow-md">
        <div class="bg-light-green h-2.5 rounded-full" :style="`width: ${monster.hp}%`"></div>
      </div>
    </div>
    <div class="my-3">
      <p class="text-left">Attack</p>
      <div class="w-full bg-gray-dark rounded-full h-2.5 shadow-md">
        <div class="bg-light-green h-2.5 rounded-full" :style="`width: ${monster.attack}%`"></div>
      </div>
    </div>
    <div class="my-3">
      <p class="text-left">Defense</p>
      <div class="w-full bg-gray-dark rounded-full h-2.5 shadow-md">
        <div class="bg-light-green h-2.5 rounded-full" :style="`width: ${monster.defense}%`"></div>
      </div>
    </div>
    <div class="my-3">
      <p class="text-left">Speed</p>
      <div class="w-full bg-gray-dark rounded-full h-2.5 shadow-md">
        <div class="bg-light-green h-2.5 rounded-full" :style="`width: ${monster.speed}%`"></div>
      </div>
    </div>
  </div>
  <div
    v-else
    data-test="card-monster"
    class="bg-white drop-shadow-lg flex flex-col justify-center items-center w-[300px] h-[460px] rounded-md"
  >
    <h3 class="text-4xl">{{ cardText }}</h3>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { type MONSTER } from '@/components/Monsters/api'
import { getImageUrl } from '@/utils/getImageUrl'

export default {
  props: {
    monster: {
      required: true,
      type: Object as PropType<MONSTER | null>
    },
    cardText: {
      type: String,
      default: 'Player'
    }
  },
  setup() {
    return {
      getImageUrl
    }
  }
}
</script>
