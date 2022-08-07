<template>
  <div>
    <ClientOnly>
      <mv-full-page ref="myFullPage" :pages="pages" v-model:page="page" :config="config">
        <template #page1>
          <div class="max-w-1760px mx-auto px-20 mt-32px flex items-center justify-between relative z-999">
            <img src="/img/logo.png" alt="">
            <div class="flex items-center space-x-15px">
              <a class="text-[#B3B3B3] hover:text-white no-underline" href="https://twitter.com/otokonft"
                target="_blank" rel="noopener noreferrer">
                <div class="w-36px h-36px cursor-pointer twitter"></div>
              </a>
              <a class="text-[#B3B3B3] hover:text-white no-underline"
                href="https://opensea.io/collection/otokonft" target="_blank" rel="noopener noreferrer">
                <div class="w-36px h-36px cursor-pointer opensea"></div>
              </a>
              <div @click="clickConnect" :class="walletStore.isConnected ? '' : 'cursor-pointer'"
                class="connectBtn h-12 flex items-center justify-between space-x-3 px-10 rounded-full text-fs18 text-white relative">
                <span class="flex h-4 w-4 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                </span>
                <span>{{ walletStore.isConnected ?
                    walletStore.ellipsisAccount :
                    (walletStore.isAddressLoad ? 'CONNECT...' :
                      'CONNECT')
                }}</span>
              </div>
            </div>
          </div>

          <div :class="page == 1 ? 'bg1-in' : ''" class="mt-170px ml-80px relative z-999">
            <img src="/img/bg1-content.png" alt="">
            <!-- <div class="text-white">
              <div>{{ t('hello', { msg: 'nuxt3' }) }}</div>
              <div>
                <h1>Color mode: {{ $colorMode.value }}</h1>
                <select v-model="$colorMode.preference">
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="sepia">Sepia</option>
                </select>
              </div>
            </div> -->
            <p class="mt-10 text-20px text-[#e5e5e5] leading-9 max-w-710px">OTOKO is an NFT collection comprising 10,000
              generative NFTs created by earliest owners of BAYC. The NFT featuers the vast multiverse of characters
              with rare elements attached to them. The project will launch 10,000 NFTs by ductch auction. This
              descending auction has a start time of Aug 6th 10 am ET at the price of 1.0 Ξ and will decrease every two
              hours to 0.1 Ξ.</p>
            <div @click="walletStore.isConnected ? changeBanner() : changeMetamask()"
              class="connectBtn mt-10 max-w-320px h-68px flex items-center justify-center rounded-full text-fs20 text-white cursor-pointer">
              Mint</div>
          </div>

          <div class="w-[100vh] h-full rounded-full absolute right-60px -top-60px z-10">
            <div class="relative circular-bg">
              <div class="circular-bg1">
                <div class="circular-bg2">
                  <div :class="page == 2 ? 'animate-ping-circular' : ''" class="circular"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="svgaContainer absolute right-0 top-1/2 -mt-300px z-20">
            <div id="svgaAnimation" style="background-color: transparent; width: 1350px; height: 729px; margin: auto;">
            </div>
          </div>

          <!-- 花 -->
          <img class="absolute right-150px top-350px flower-in" src="/img/flower.png" alt="">

          <!-- 方块1 -->
          <img class="absolute right-140px bottom-310px block1-in" src="/img/block1.png" alt="">

          <!-- 方块2 -->
          <img class="absolute left-88px bottom-108px block2-in" src="/img/block2.png" alt="">

          <!-- 飞碟 -->
          <img class="absolute left-1/2 -ml-42px top-200px ufo-in" src="/img/ufo.png" alt="">

          <!-- 指环 -->
          <img class="absolute left-1/2 -ml-88px bottom-250px ring-in" src="/img/ring.png" alt="">


        </template>
        <template #page2>
          <div class="bg-center bg-cover h-700px" :style="{ 'background-image': 'url(/img/bg4.png)' }"></div>
          <div class="max-w-1600px mx-auto text-center">
            <img :class="page == 2 ? 'bg2-banner-in' : ''" class="max-w-1400px mx-auto mt-50px" src="/img/bg4-title.png"
              alt="">
            <div :class="page == 2 ? 'bg2-in' : ''" class="mx-auto leading-30px text-20px text-white">
              <p class="mt-40px">At the beginning of 2032, owing to an ice age caused by climate change, the fate of
                human beings hung in the balance. In March, a mystic encrypted message in the form of quantum signal was
                received by all governments on earth. The deciphered message indicated a blueprint of a climate
                controller, every component of which had a multiverse coordinate attached to it. In order to fetch all
                the components of the climate controller, scientists on earth built a humanoid robot named Otoko. With
                the fate of human beings in its hands, Otoko embarked on an adventure of multiverse traveling…</p>
            </div>
          </div>
        </template>
        <template #page3>
          <div data-scroll="true">
            <div ref="page3" id="page3" class="overflow-auto h-screen">
              <div class="text-center py-80px max-w-1600px mx-auto">
                <img class="mx-auto" src="/img/bgnew-title.png" alt="">
                <div class="flex items-center justify-between mt-80px">
                  <img class="w-640px" src="/img/bgnew-1.png" alt="">
                  <div class="bg-[#24243a] roudned-10px w-640px py-60px flex items-center justify-center">
                    <div class="px-30px text-center">
                      <img src="/img/debris.png" alt="">
                      <p class="text-fs20 text-white mt-35px leading-30px">In the endless universe, there is a group of
                        clippers that are collecting debris scattered in various multiverse until the last piece is
                        found...
                      </p>
                    </div>
                  </div>
                </div>
                <img src="/img/left.png" alt="">
                <div class="flex items-center justify-between">
                  <div class="bg-[#24243a] roudned-10px w-640px py-60px flex items-center justify-center">
                    <div class="px-30px text-center">
                      <img src="/img/manufacture.png" alt="">
                      <p class="text-fs20 text-white mt-35px leading-30px">In another corner of the earth, at a glance
                        from the outside, Otoko slogan is put on the top of the world's most powerful robot
                        manufacturing
                        base, designed by the world's top notch scientists. They have been working hard to test all
                        possible combinations to develop the cyborg. Finally... they succeeded!</p>
                    </div>
                  </div>
                  <img class="w-640px" src="/img/bgnew-2.png" alt="">
                </div>
                <img src="/img/right.png" alt="">
                <div class="flex items-center justify-between pb-80px">
                  <img class="w-640px" src="/img/bgnew-3.png" alt="">
                  <div class="bg-[#24243a] roudned-10px w-640px py-60px flex items-center justify-center">
                    <div class="px-30px text-center">
                      <img src="/img/birth.png" alt="">
                      <p class="text-fs20 text-white mt-35px leading-30px">The cheering sound spreads all over the
                        earth,
                        and the efforts are finally not in vain! The robot production workshop is able to achieve fully
                        automatic production, only to see rows of robots standing there, as if waiting for some
                        instructions...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #page4>
          <div class="relative w-full h-full">
            <img class="absolute left-0 top-0" src="/img/bg3-1-1.png" alt="">
            <img class="absolute right-0 bottom-0" src="/img/bg3-1-2.png" alt="">
            <div class="pt-20 text-center">
              <img class="mx-auto" src="/img/GALLERY.png" alt="">
            </div>
            <div class="pt-80px text-center animate-bounce">
              <img class="mx-auto" src="/img/bg3-bottom.png" alt="">
            </div>
            <!-- <p :class="page == 3 ? 'bg3-text-in' : ''"
              class="mt-26px text-fs24 text-white leading-8 max-w-1450px mx-auto text-center">
              All eyes were on the robot whose model name is Otoko, for all of its parts could be manufactured on this
              planet.
              Whether this was a test or a prank by some kind of celestial hierarchy, the fate of human beings would be
              in the hands of this robot.
              Otoko was about to embark on an adventure to 10 different multiverses. How would it reshape the future of
              human beings?
              To be continued…
            </p> -->
            <div class="mt-60px relative z-999">
              <div class="max-w-1560px mx-auto rounded-20px bg-white-005 p-30px overflow-hidden">
                <div :style="{ transform: `translateX(-${(bg3Banner - 1) * 102.5}%)` }"
                  class="flex items-center space-x-40px transition duration-150 ease-in-out">
                  <div class="flex-none w-360px text-center" v-for="(item, index) in nftData" :key="index">
                    <img class="w-full rounded-20px transform hover:scale-110 duration-150 ease-in-out"
                      :src="`/img/${index + 1}.jpg`" alt="">
                    <!-- <p class="mt-20px text-fs24 text-white">{{ walletStore.remainingNum }} remaining of 10000</p> -->
                    <p class="mt-20px text-fs24 text-white">{{ item }}</p>
                  </div>
                  <!-- <ClientOnly>
                  <el-carousel :interval="4000" height="580px">
                    <el-carousel-item v-for="index in 4" :key="index">
                      <img class="rounded-3xl transform scale-75" :src="`/img/${index}.png`" alt="">
                    </el-carousel-item>
                  </el-carousel>
                </ClientOnly> -->
                </div>
                <div class="flex items-center justify-center space-x-20px mt-40px">
                  <div @click="bg3Banner = 1" :class="bg3Banner == 1 ? 'active' : ''"
                    class="w-6 h-6 rounded-full cursor-pointer bg3-banner-bg"></div>
                  <div @click="bg3Banner = 2" :class="bg3Banner == 2 ? 'active' : ''"
                    class="w-6 h-6 rounded-full cursor-pointer bg3-banner-bg"></div>
                  <div @click="bg3Banner = 3" :class="bg3Banner == 3 ? 'active' : ''"
                    class="w-6 h-6 rounded-full cursor-pointer bg3-banner-bg"></div>
                </div>
              </div>
            </div>
            <div class="absolute w-full bottom-5 text-center text-white text-fs20">Otoko © 2022 All Rights Reserved.
            </div>
          </div>
        </template>
      </mv-full-page>
    </ClientOnly>

    <!-- <div>
      <div v-show="loading" class="fixed top-0 left-0 w-full h-full bg-BgPopup z-999"></div>
      <Transition enter-from-class="opacity-0 scale-95 duration-150 ease-out"
        enter-to-class="opacity-100 scale-100 duration-150 ease-out"
        leave-from-class="opacity-100 scale-100 duration-150 ease-in"
        leave-to-class="opacity-0 scale-95 duration-150 ease-in">
        <div v-show="loading" ref="loadingRef"
          class="flex items-center justify-center absolute left-0 top-0 w-full h-full rounded-10px bg-MetaMask z-999 cursor-pointer">
          <div class="loader">
            <div class="loading-1"></div>
            <div class="loading-2">Loading...</div>
          </div>
        </div>
      </Transition>
    </div> -->

    <div>
      <div v-show="walletModal" class="fixed top-0 left-0 w-full h-full bg-BgPopup z-999"></div>
      <Transition enter-from-class="opacity-0 scale-95 duration-150 ease-out"
        enter-to-class="opacity-100 scale-100 duration-150 ease-out"
        leave-from-class="opacity-100 scale-100 duration-150 ease-in"
        leave-to-class="opacity-0 scale-95 duration-150 ease-in">
        <div v-show="walletModal" ref="walletModalRef" @click.stop="walletStore.useWeb3(), changeMetamask()"
          class="flex items-center justify-center absolute left-1/2 -ml-160px top-1/2 -mt-120px w-320px py-40px rounded-10px bg-MetaMask z-999 cursor-pointer">
          <div class="flex items-center justify-center h-full">
            <div class="">
              <div class="flex items-center justify-center">
                <img src="/img/MetaMask.png" alt="">
              </div>
              <div class="mt-5 text-white text-fs28 text-center">MetaMask</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div>
      <div v-show="bannerModal" class="absolute top-0 left-0 w-full h-full bg-BgPopup z-999"></div>
      <Transition enter-from-class="opacity-0 scale-95 duration-150 ease-out"
        enter-to-class="opacity-100 scale-100 duration-150 ease-out"
        leave-from-class="opacity-100 scale-100 duration-150 ease-in"
        leave-to-class="opacity-0 scale-95 duration-150 ease-in">
        <div v-show="bannerModal" ref="bannerModalRef"
          class="absolute left-1/2 -ml-160px top-1/2 -mt-400px w-380px p-20px rounded-10px bg-white z-999">
          <div class="flex items-center">
            <div class="w-380px h-380px bg-cover bg-center flex items-center justify-center relative">
              <div @click="bannerModal = false"
                class="bg-black text-white rounded-full absolute right-10px top-10px z-10 w-20px h-20px cursor-pointer">
                <div class="flex items-center justify-center">
                  <div class="border-t-2 border-white w-10px h-2px mt-9px"></div>
                </div>
              </div>
              <div class="absolute left-0 top-0 w-full h-full">
                <!-- <img class="duration-300 ease-out absolute left-0 top-0 w-380px" src="/img/1.png" alt=""> -->
                <img class="duration-300 ease-out absolute left-0 top-0 w-380px"
                  :src="`https://ipfs.io/ipfs/QmRd4ynAef5xkfoGCtPtVuiiQfg64cFDd2UcPbt3jtDjSz/${walletStore.nowMintTokenId}.png`"
                  alt="">
              </div>
            </div>
          </div>
          <div>
            <div class="pt-30px text-center text-fs20 text-[#666666] flex items-center justify-center">
              <span>OTOKO</span>
              <span>#{{ walletStore.nowMintTokenId }}</span>
            </div>
            <div class="pt-5 text-center text-fs48 text-black">{{ walletStore.getNowMintPrice ?
                (Number(walletStore.getNowMintPrice) / 10 / 10) : '--'
            }} ETH</div>
            <div class="text-center mt-4 text-[#666666] leading-8 text-fs18">
              <p>Price per Token: 1Ξ</p>
              <p>Dutch Auction starts at 1Ξ and decreases every two hours to resting price of 0.1Ξ</p>
            </div>
            <!-- <div class="flex items-center space-x-10px">
              <div class="flex items-center justify-between bg-[#F2F2F2] rounded w-200px h-48px flex-none">
                <div class="flex items-center justify-between bg-[#F2F2F2] rounded w-200px h-48px flex-none">
                  <div @click="reducePlusBanner(1)"
                    :class="bannerNumber == 1 ? 'bg-[#E6E6E6] cursor-not-allowed' : 'bg-[#CCCCCC] cursor-pointer'"
                    class="w-64px h-full flex items-center justify-center">
                    <img v-show="bannerNumber == 1" class="w-24px" src="/img/reduce.png" alt="">
                    <img v-show="bannerNumber != 1" class="w-24px" src="/img/reduce_active.png" alt="">
                  </div>
                  <div class="bg-[#F2F2F2] flex-1 h-full text-black text-fs24 flex items-center justify-center">
                    {{ bannerNumber }}</div>
                  <div @click="reducePlusBanner(2)"
                    :class="bannerNumber == 5 ? 'bg-[#E6E6E6] cursor-not-allowed' : 'bg-[#CCCCCC] cursor-pointer'"
                    class="w-64px h-full flex items-center justify-center">
                    <img v-show="bannerNumber == 5" class="w-24px" src="/img/plus.png" alt="">
                    <img v-show="bannerNumber != 5" class="w-24px" src="/img/plus_active.png" alt="">
                  </div>
                </div>
                <div @click="reducePlusBanner(5)"
                  class="rounded bg-black hover:text-[#CCCCCC] text-white text-fs18 flex items-center justify-center flex-1 h-48px cursor-pointer">
                  Max 5 per wallet</div>
              </div>
              <div
                class="rounded bg-[#CCCCCC] text-white text-fs18 flex items-center justify-center flex-1 h-48px cursor-not-allowed">
                Max 5 per wallet</div>
            </div> -->
            <div
              :class="walletStore.remainingNum <= 0 || walletStore.getNowMintPrice === '' ? 'bg-[#999999] cursor-not-allowed' : 'connectBtn cursor-pointer'"
              @click="walletStore.remainingNum <= 0 || walletStore.getNowMintPrice === '' ? '' : useMint(bannerNumber)"
              class="w-full mx-auto h-68px rounded-full bg-[#CCCCCC] text-white flex items-center justify-center text-fs18 mt-26px">
              MINT</div>
            <p class="mt-4 text-center">{{ walletStore.remainingNum }} remaining of 10000</p>
            <!-- <p class="mt-10px text-[#666666] text-center">10000 remaining of 10000</p> -->
          </div>
        </div>
      </Transition>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Config } from 'mv-full-page'
import { useI18n } from 'vue-i18n'

// // i18n语言国际化
// const { t } = useLang()
// const { locale } = useI18n()
// setTimeout(() => {
//   // 切换语言
//   locale.value = 'zh-CN'
// }, 3000);
// // 颜色模块
// const colorMode = useColorMode()
// console.log(colorMode.preference)

const walletStore = useWalletStore();
const bg3Banner = ref(1)
const pages = ref(4)
const page = ref(1)
const config = ref({
  direction: 'v'
} as Config)

const nftData = ref([
  'OTOKO#483',
  'OTOKO#1803',
  'OTOKO#1927',
  'OTOKO#3587',
  'OTOKO#4129',
  'OTOKO#4360',
  'OTOKO#5000',
  'OTOKO#5745',
  'OTOKO#6362',
  'OTOKO#6556',
  'OTOKO#6803',
  'OTOKO#7301',
])

const myFullPage = ref();
const toPage = (num: number) => {
  page.value = num;
  (myFullPage.value).goPage(num, false);
};

onMounted(async () => {
  await svga_player('/svga/1.svga')
})

//声明svga变量
var parser;
let loading = ref(true)
// 播放svga的方法
async function svga_player(url: any) {
  const SVGA = (await import('svgaplayerweb'))
  const player = new SVGA.Player('#svgaAnimation');
  parser = new SVGA.Parser();
  parser.load(url, function (videoItem: any) {
    player.setVideoItem(videoItem);
    // zIndex.value = 9999;
    player.startAnimation();
    loading.value = false
  });
}

const clickConnect = () => {
  if (!walletStore.isAddressLoad) {
    if (!walletStore.isConnected) {
      changeMetamask()
    }
  }
}

let walletModal = ref(false)
const walletModalRef = ref(null)
const changeMetamask = () => {
  walletModal.value = !walletModal.value
}
onClickOutside(
  walletModalRef,
  (event) => {
    walletModal.value = false
  },
)

// banner弹窗
let bannerModal = ref(false)
const bannerModalRef = ref(null)
const changeBanner = () => {
  bannerModal.value = !bannerModal.value
}
onClickOutside(
  bannerModalRef,
  (event) => {
    bannerModal.value = false
  },
)

let bannerNumber = ref(1)
// banner加减
const reducePlusBanner = (state: number) => {
  if (state == 1) {
    // 减
    if (bannerNumber.value != 1) {
      bannerNumber.value--
    }
  } else if (state == 2) {
    // 加
    if (bannerNumber.value != 5) {
      bannerNumber.value++
    }
  } else if (state == 5) {
    bannerNumber.value = state
  }
}

const page3 = ref<HTMLElement | null>(null)
const { x, y, isScrolling, arrivedState, directions } = useScroll(page3)
let yTimer: string | number | NodeJS.Timeout | undefined
watch(y, (newValue: any, oldValue: any) => {
  if(yTimer){
    clearTimeout(yTimer)
  }
  yTimer = setTimeout(() => {
    if (newValue == 0) {
      toPage(2)
    } else if (newValue >= 705.5) {
      toPage(4)
    }
  }, 500);
})

</script>

<style scoped>
::-webkit-scrollbar{
  width: 0.1px;
}
.loader {
  width: 150px;
  margin: 50px auto 70px;
  position: relative;
}

.loader .loading-1 {
  position: relative;
  width: 100%;
  height: 10px;
  border: 1px solid #69d2e7;
  border-radius: 10px;
  animation: turn 4s linear 1.75s infinite;
}

.loader .loading-1:before {
  content: "";
  display: block;
  position: absolute;
  width: 0%;
  height: 100%;
  background: #69d2e7;
  box-shadow: 10px 0px 15px 0px #69d2e7;
  animation: load 2s linear infinite;
}

.loader .loading-2 {
  width: 100%;
  position: absolute;
  top: 10px;
  color: #69d2e7;
  font-size: 22px;
  text-align: center;
  animation: bounce 2s linear infinite;
}

@keyframes load {
  0% {
    width: 0%;
  }

  87.5%,
  100% {
    width: 100%;
  }
}

@keyframes turn {
  0% {
    transform: rotateY(0deg);
  }

  6.25%,
  50% {
    transform: rotateY(180deg);
  }

  56.25%,
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes bounce {

  0%,
  100% {
    top: 10px;
  }

  12.5% {
    top: 30px;
  }
}
</style>