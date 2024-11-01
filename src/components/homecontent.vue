<script setup lang="ts">
import JoinNow from '@/components/JoinNow.vue'
</script>
<template>
  <header
    data-layername="homeHero"
    class="flex flex-col text-base font-bold text-white"
  >
    <div class="flex relative flex-col w-full min-h-[720px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e376978b57272bd60c5efd34433db1282886e675e73250683fed5fca36efb9b?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
        alt="Background image for home hero section"
        class="object-cover absolute inset-0 size-full"
      />
      <div
        data-layername="overlay"
        class="flex relative flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full"
      >
        <p
          data-layername="postedOnStartup"
          class="font-semibold leading-none uppercase tracking-[3px]"
        >
          <span class="font-medium">Posted on</span>
          <span class="font-black">startup</span>
        </p>
        <h1
          data-layername="stepByStepGuideToChoosingGreatFontPairs"
          class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]"
        >
          Step-by-step guide to choosing great font pairs
        </h1>
        <p
          data-layername="byJamesWestMay232022"
          class="mt-6 leading-7 text-blue-600"
        >
          By <span class="text-blue-600">James West</span> | May 23, 2022
        </p>
        <p
          data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident"
          class="mt-4 leading-7 w-[599px] max-md:max-w-full"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <a
          href="#"
          data-layername="button"
          class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 max-md:px-5 max-md:mt-10 max-md:mb-2.5"
          tabindex="0"
          role="button"
        >
          Read More &gt;
        </a>
      </div>
    </div>
  </header>

  <section
    class="flex flex-col px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <div
      class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full"
    >
      <h2 class="tracking-tighter">Featured Post</h2>
      <h2 class="tracking-tighter">All Posts</h2>
      <router-link
        to="/blog"
        class="my-auto text-base leading-7 text-amber-300 hover:text-amber-400"
        >View All</router-link
      >
    </div>

    <main class="mt-8 w-full max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col items-start p-8 mx-auto w-full font-bold border-none shadow-lg max-md:px-5 max-md:mt-8 max-md:max-w-full"
          >
            <img
              loading="lazy"
              src="@/assets/images/misc/bangunan-putih.png"
              alt="Featured blog post"
              class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full"
            />
            <div class="mt-8 text-sm font-medium leading-none">
              By <span class="text-amber-300">John Doe</span> |
              <time datetime="2022-05-23">May 23, 2022</time>
            </div>
            <h3
              class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <router-link
              to="/blog/post"
              class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5 hover:text-black hover:bg-x-yellow"
              tabindex="0"
            >
              Read More &gt;
            </router-link>
          </div>
        </article>

        <aside class="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <article
              v-for="(post, index) in 4"
              :key="index"
              :class="[
                'flex flex-col py-7 pl-8 max-md:max-w-full',
                index % 2 === 1 ? 'bg-orange-50' : 'bg-white',
              ]"
            >
              <div class="text-sm font-medium leading-none">
                By <span class="text-amber-300">John Doe</span> |
                <time datetime="2021-08-23">Aug 23, 2021</time>
              </div>
              <h4 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                8 Figma design systems that you can download for free today.
              </h4>
            </article>
          </div>
        </aside>
      </div>
    </main>
  </section>

  <section
    class="about-us-our-mission flex flex-col px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
      alt=""
      class="object-contain self-end aspect-[45.45] max-w-[1061px] w-[1061px] max-md:max-w-full"
    />
    <div class="px-20 py-24 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full"
          >
            <h2
              class="self-start font-semibold leading-none uppercase tracking-[3px]"
            >
              ABOUT US
            </h2>
            <h3
              class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full"
            >
              We are a community of content writers who share their learnings
            </h3>
            <p
              class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" class="self-start mt-7 text-lg leading-8 text-amber-300"
              >Read More &gt;</a
            >
          </div>
        </article>
        <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full"
          >
            <h2 class="font-semibold leading-none uppercase tracking-[3px]">
              Our mision
            </h2>
            <h3 class="mt-6 text-3xl font-bold tracking-tighter leading-10">
              Creating valuable content for creatives all around the world
            </h3>
            <p
              class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section
    class="category-selection flex flex-col px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <h2
      class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800"
    >
      Choose A Category
    </h2>
    <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <router-link
          to="/category"
          class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
        >
          <div
            class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
          >
            <div
              class="flex overflow-hidden relative flex-col w-12 aspect-square fill-orange-50"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f6caa464f89441947adf7010f508de88e396385dc4e183a16249f0d3d4ce590?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
                class="object-cover absolute inset-0 size-full"
                alt=""
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42328ee204f12686772d48e973ea75e9ad4995c9257d6ead5e4f8171bcdb402b?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
                class="object-contain w-full aspect-square"
                alt="Business category icon"
              />
            </div>
            <h3
              class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800"
            >
              Business
            </h3>
            <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </router-link>
        <router-link
          to="category"
          class="flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
        >
          <div
            class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b89db23f83956f322cc935b7804d24e3e37897b1a26b858fd6cf7f02d51358?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
              class="object-contain w-12 aspect-[0.98] fill-orange-50"
              alt="Economy category icon"
            />
            <h3
              class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800"
            >
              Startup
            </h3>
            <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </router-link>
        <router-link
          to="category"
          class="flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
        >
          <div
            class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13ae9909bbc2c165a9b19421afabcbe1b8a6266b574c6b679abd56857abb461b?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
              class="object-contain w-12 aspect-[0.98] fill-orange-50"
              alt="Economy category icon"
            />
            <h3
              class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800"
            >
              Economy
            </h3>
            <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </router-link>
        <router-link
          to="category"
          class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
        >
          <div
            class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9237ff2f26395c060ee02f68275a35d591376788d97682c02063bb5e267bd790?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
              class="object-contain w-12 aspect-[0.96] fill-orange-50"
              alt="Technology category icon"
            />
            <h3
              class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800"
            >
              Technology
            </h3>
            <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <article class="relative w-[1280px] h-[705px] mx-20 mt-20 mr-20">
    <div class="absolute left-0 bottom-0 w-[820px] h-[705px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a787077d1aa9468909fc456928315aef6413f3fe1da57d6c1b9c2804b4b5490"
        alt="Group of friends enjoying view"
        class="w-full h-full object-cover object-bottom"
      />
    </div>

    <div
      class="absolute right-0 bottom-0 bg-white w-[706px] h-[584px] p-20 shadow-lg z-10 mr-20"
    >
      <span
        class="block text-sm font-semibold uppercase tracking-[3px] text-gray-800"
      >
        WHY WE STARTED
      </span>

      <h2
        class="mt-6 text-5xl font-bold tracking-tighter leading-[64px] text-gray-800"
      >
        It started out as a simple idea and evolved into our passion
      </h2>

      <p class="mt-6 text-base leading-7 text-gray-500 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>

      <button class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg font-bold">
        Discover our story >
      </button>
    </div>
  </article>

  <section class="flex flex-col mx-20 mt-20 mr-20">
    <h1
      class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800"
    >
      List of Authors
    </h1>
    <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <router-link to="authors"
          class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full bg-zinc-100"
        >
          <div
            :class="[
              'flex flex-col grow items-center py-10 w-full leading-none',
              'max-md:px-5 max-md:mt-8',
            ]"
          >
            <img
              src="@/assets/images/logo/floyd.png"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              Floyd Miles
            </h2>
            <p class="self-stretch text-sm mt-4 text-center text-zinc-500">
              Content Writer @Company
            </p>
            <img
              src="@/assets/images/logo/Social wrapper.png"
              alt="Author rating"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </router-link>
        <router-link to="authors"
          class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full bg-zinc-100"
        >
          <div
            :class="[
              'flex flex-col grow items-center py-10 w-full leading-none',
              'max-md:px-5 max-md:mt-8',
            ]"
          >
            <img
              src="@/assets/images/logo/Dianne.png"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              Dianne Russell
            </h2>
            <p class="self-stretch text-sm mt-4 text-center text-zinc-500">
              Content Writer @Company
            </p>
            <img
              src="@/assets/images/logo/Social wrapper.png"
              alt="Author rating"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </router-link >
        <router-link to="authors"
          class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full bg-zinc-100"
        >
          <div
            :class="[
              'flex flex-col grow items-center py-10 w-full leading-none',
              'max-md:px-5 max-md:mt-8',
            ]"
          >
            <img
              src="@/assets/images/logo/jenny.png"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              Jenny Wilson
            </h2>
            <p class="self-stretch text-sm mt-4 text-center text-zinc-500">
              Content Writer @Company
            </p>
            <img
              src="@/assets/images/logo/Social wrapper.png"
              alt="Author rating"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </router-link>
        <router-link to="authors"
          class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full bg-zinc-100"
        >
          <div
            :class="[
              'flex flex-col grow items-center py-10 w-full leading-none',
              'max-md:px-5 max-md:mt-8',
            ]"
          >
            <img
              src="@/assets/images/logo/Leslie.png"
              class="object-contain w-32 max-w-full rounded-full aspect-square"
            />
            <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
              Leslie Alexander
            </h2>
            <p class="self-stretch text-sm mt-4 text-center text-zinc-500">
              Content Writer @Company
            </p>
            <img
              src="@/assets/images/logo/Social wrapper.png"
              alt="Author rating"
              class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
            />
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <section
    data-layername="logoComponent"
    class="flex flex-row gap-10 items-start text-zinc-500 mx-20 mt-20 mr-20"
  >
    <header class="flex flex-col self-start mt-0">
      <p
        data-layername="weAre"
        class="self-start text-sm leading-none opacity-60 flex flex-row"
      >
        We are
      </p>
      <h2
        data-layername="featuredIn"
        class="text-2xl font-bold text-black leading-none"
      >
        Featured in
      </h2>
    </header>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7135a9926b50177c84816bd1e79c186c62bf058d90493fd8229f56c2ffd34d5f?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
      alt="Featured in logos"
      class="object-contain grow shrink-0 my-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full flex flex-col"
    />
  </section>

  <section
    data-layername="testimonials"
    class="flex flex-row rounded-none mx-20 mt-20 mr-20"
  >
    <div
      data-layername="background"
      class="flex flex-col justify-center items-center px-16 py-20 w-full bg-orange-50 max-md:px-5 max-md:max-w-full"
    >
      <div
        class="flex flex-row gap-5 justify-between w-full max-w-[1500px] max-md:max-w-full"
      >
        <div
          class="flex flex-col items-start self-start w-[100%] mt-3 text-base text-gray-800"
        >
          <h2
            data-layername="testimoniaLs"
            class="font-semibold leading-none uppercase tracking-[3px]"
          >
            TESTIMONIALS
          </h2>
          <h3
            data-layername="whatPeopleSayAboutOurBlog"
            class="mt-3 text-4xl font-bold tracking-tighter leading-10"
          >
            What people say about our blog
          </h3>
          <p
            data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor"
            class="self-stretch mt-4 leading-7"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div
          class="shrink-0 w-px border border-solid mx-16 opacity-40 bg-zinc-500 border-zinc-500 h-[310px]"
        ></div>
        <div class="flex flex-col max-md:max-w-full">
          <blockquote
            data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua"
            class="self-start text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </blockquote>
          <div
            class="flex flex-wrap gap-5 justify-between items-start mt-28 w-full max-md:mt-10 max-md:max-w-full"
          >
            <div class="flex gap-4 mt-2">
              <img
                loading="lazy"
                src="@/assets/images/misc/pria-kacamata-hitam.jpg"
                alt="Jonathan Vallem"
                class="object-contain shrink-0 self-start w-12 rounded-full aspect-square"
              />
              <div class="flex flex-col">
                <p
                  data-layername="jonathanVallem"
                  class="text-2xl font-bold leading-none text-gray-800"
                >
                  Jonathan Vallem
                </p>
                <p
                  data-layername="newYorkUsa"
                  class="self-start text-base leading-7 text-zinc-500"
                >
                  New york, USA
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
                alt=""
                class="object-contain shrink-0 my-auto w-12 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
                alt=""
                class="object-contain shrink-0 aspect-square w-[62px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <JoinNow />
</template>
