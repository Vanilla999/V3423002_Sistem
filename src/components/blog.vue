<script setup lang="ts">
import JoinNow from '@/components/JoinNow.vue'
window.scrollTo(0,0);
</script>
<template>
  <header data-layername="blogHeader" class="flex flex-col">
    <section
      data-layername="background"
      class="p-20 w-full bg-gray-200 max-md:px-5 max-md:max-w-full"
    >
      <div class="flex gap-5 max-md:flex-col">
        <article
          data-layername="column"
          class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full"
        >
          <div
            class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full"
          >
            <h2
              data-layername="featuredPost"
              class="text-base leading-none text-gray-800 uppercase tracking-[3px]"
            >
              Featured Post
            </h2>
            <h1
              data-layername="stepByStepGuideToChoosingGreatFontPairs"
              class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
            >
              Step-by-step guide to choosing great font pairs
            </h1>
            <p
              data-layername="byJohnDoeLMay232022"
              class="mt-4 text-sm leading-none text-amber-300"
            >
              By <span class="text-amber-300">John Doe</span> l May 23, 2022
            </p>
            <p
              data-layername="duisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProident"
              class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <router-link to="/blogPost">
              <button
                data-layername="button"
                class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5"
              >
                Read More &gt;
              </button>
            </router-link>
          </div>
        </article>
        <aside
          data-layername="column"
          class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20596293fcb280fea4d36e6cdc0b69fc581db580b87fc408dbfb56e0550696d5?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
            alt="Featured post illustration"
            class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
          />
        </aside>
      </div>
    </section>
  </header>

  <section class="all-blogs-section mx-20 mt-20 mr-20">
    <header
      class="flex flex-col text-5xl font-bold tracking-tighter leading-none text-gray-800 rounded-none max-md:text-4xl"
    >
      <h1 class="self-start max-md:text-4xl">All posts</h1>
      <div
        class="mt-8 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[1px] opacity-[0.32] max-md:max-w-full"
      ></div>
    </header>
  </section>

  <section class="blog-cards">
    <div class="flex gap-5 mx-20 mt-20 mr-32 max-md:flex-col">
      <aside class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a819735de3773a88c18e36606fa5375e245ea6fd510629f6be427762b46cddbf?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
            alt="Blog post image 1"
            class="object-contain w-full aspect-[1.54] max-md:max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacb2adf4a1a46e2a388ab3f29c43997e85af95886d2d65654e1acce9c0f704f?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
            alt="Blog post image 2"
            class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ba77152fd48222861cc7b742a3a9306d800b286c184eb3eb60045d29e6a2aa?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
            alt="Blog post image 3"
            class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc022489dd223f95ce0ac2323d51ddc152cbcba99ec8fa6e4884feb0258782fe?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
            alt="Blog post image 4"
            class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a819735de3773a88c18e36606fa5375e245ea6fd510629f6be427762b46cddbf?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
            alt="Blog post image 5"
            class="object-contain mt-16 w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </aside>
      <main class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
        <div
          class="flex z-10 flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
        >
          <article class="blog-post mb-44 max-md:mb-10">
            <h2 class="self-start uppercase tracking-[3px]">Startup</h2>
            <h3
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Design tips for designers that cover everything you need
            </h3>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </article>
          <article class="blog-post mb-44 max-md:mb-10">
            <h2 class="self-start uppercase tracking-[3px]">Business</h2>
            <h3
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              How to build rapport with your web design clients
            </h3>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </article>
          <article class="blog-post mb-44 max-md:mb-10">
            <h2 class="self-start uppercase tracking-[3px]">Startup</h2>
            <h3
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Logo design trends to avoid in 2022
            </h3>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </article>
          <article class="blog-post mb-44 max-md:mb-10">
            <h2 class="self-start uppercase tracking-[3px]">Technology</h2>
            <h3
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              8 Figma design systems you can download for free today
            </h3>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </article>
          <article class="blog-post mb-44 max-md:mb-10">
            <h2 class="self-start uppercase tracking-[3px]">Economy</h2>
            <h3
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Font sizes in UI design: The complete guide to follow
            </h3>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </article>
        </div>
      </main>
    </div>
  </section>

  <nav
    aria-label="Pagination navigation"
    class="flex justify-center items-center gap-4 mt-20 font-bold text-center rounded-none"
  >
    <button
      class="text-2xl leading-none text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-gray-800 hover:text-3xl transition-all duration-200"
      aria-label="Previous page"
    >
      &lt; Prev
    </button>

    <button
      class="text-2xl tracking-tighter leading-none text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-gray-800 hover:text-3xl transition-all duration-200"
      aria-label="Next page"
    >
      Next &gt;
    </button>
  </nav>

  <section
    class="category-selection flex flex-col px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
  >
    <h2
      class="self-Left text-4xl font-bold tracking-tighter leading-none text-gray-800"
    >
      All Categories
    </h2>
    <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
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
        </article>
        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col grow items-start p-8 w-full bg-blue-600 max-md:px-5 max-md:mt-8"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8aaa635a93f743cf1d0c184239dcba058bb8e8a0585ed501e274c11bc2bff66?placeholderIfAbsent=true&apiKey=00f3f870602b4918a84714ec8570d910"
              class="object-contain w-12 aspect-square fill-orange-50"
              alt="Startup category icon"
            />
            <h3
              class="mt-4 text-3xl font-bold tracking-tighter leading-none text-orange-50"
            >
              Startup
            </h3>
            <p class="self-stretch mt-1 text-base leading-7 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </div>
        </article>
        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
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
        </article>
        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
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
        </article>
      </div>
    </div>
  </section>

  <JoinNow />
</template>
