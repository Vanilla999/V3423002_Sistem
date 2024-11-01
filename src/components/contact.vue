<script setup lang="ts">
window.scrollTo(0,0);
</script>

<template>
  <section
    class="flex flex-col mt-32 items-center text-base text-center text-gray-800 rounded-none mx-auto max-w-screen-md"
  >
    <h2 class="font-black leading-none uppercase tracking-[3px]">Contact us</h2>
    <h3
      class="mt-3 text-5xl font-bold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl"
    >
      Let's Start a Conversation
    </h3>
    <p
      class="z-10 self-center mx-auto mt-6 w-[55%] leading-7 text-zinc-500 max-md:max-w-full"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>
  </section>

  <section
    data-layername="contactUs"
    class="flex flex-col mt-8 mx-auto max-w-screen-md"
  >
    <div
      data-layername="background"
      class="px-16 py-12 w-full bg-amber-300 max-md:px-5 max-md:max-w-full"
    >
      <div class="flex gap-5 max-md:flex-col">
        <article
          data-layername="column"
          class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
        >
          <div
            class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10"
          >
            <h2
              data-layername="workingHours"
              class="text-sm leading-none opacity-60"
            >
              Working hours
            </h2>
            <hr
              data-layername="line"
              class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600"
            />
            <p data-layername="mondayToFriday" class="mt-4 font-bold">
              Monday To Friday
            </p>
            <p data-layername="900AmTo800Pm" class="font-bold">
              9:00 AM to 8:00 PM
            </p>
            <p
              data-layername="ourSupportTeamIsAvailable247"
              class="text-base leading-7 opacity-60"
            >
              Our Support Team is available 24/7
            </p>
          </div>
        </article>
        <article
          data-layername="column"
          class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
            <h2
              data-layername="contactUs"
              class="text-sm leading-none opacity-60"
            >
              Contact Us
            </h2>
            <hr
              data-layername="line"
              class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600"
            />
            <p
              data-layername="02079932905"
              class="mt-4 text-xl font-bold leading-relaxed"
            >
              020 7993 2905
            </p>
            <p
              data-layername="helloFinsweetCom"
              class="text-base leading-7 opacity-60"
            >
              hello@finsweet.com
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section
    class="flex flex-col mt-4 mx-auto max-w-screen-md text-base leading-7 text-gray-400 rounded-sm"
  >
    <form
      class="gap-2.5 self-stretch p-3 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
    >
      <label for="fullName" class="sr-only">Full Name</label>
      <input
        id="fullName"
        type="text"
        placeholder="Full Name"
        class="w-full p-2 rounded-sm"
        aria-label="Enter your full name"
      />
    </form>
  </section>
  <section
    class="flex flex-col mt-4 mx-auto max-w-screen-md text-base leading-7 text-gray-800 rounded-sm"
  >
    <form
      class="gap-2.5 self-stretch p-3 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
    >
      <label for="fullName" class="sr-only">Full Name</label>
      <input
        id="youremail"
        type="text"
        placeholder="Your Email"
        class="w-full p-2 rounded-sm"
        aria-label="Enter your email"
      />
    </form>
  </section>

  <section
    class="flex flex-wrap gap-4 mx-auto mt-4 items-center max-w-screen-md text-base leading-7 text-gray-800 whitespace-nowrap mt-4"
  >
    <div
      class="flex flex-1 shrink justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5"
    >
      <select
        id="provinceSelect"
        class="appearance-none bg-transparent border-none w-full"
      >
        <option value="">Provinsi</option>
        <option value="">Kota</option>
      </select>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
        alt=""
        class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]"
      />
    </div>
    <div
      class="flex flex-1 shrink justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5"
    >
      <select
        id="citySelect"
        class="appearance-none bg-transparent border-none w-full"
      >
        <option value="">Kota</option>
        <option value="">Provinsi</option>
      </select>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
        alt=""
        class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]"
      />
    </div>
  </section>

  <div
    data-layername="message"
    class="flex flex-wrap mt-4 mx-auto gap-4 border border-solid border-gray-400 items-center max-w-screen-md text-base leading-7 text-gray-800 whitespace-nowrap"
  >
    <label for="messageInput" class="sr-only">Your Message</label>
    <textarea
      id="messageInput"
      placeholder="Type Message"
      class="w-full p-6 bg-transparent resize-none min-h-[120px]"
    ></textarea>
  </div>

  <button
    data-layername="button"
    class="flex flex-col mx-auto mt-4 max-w-screen-md text-2xl font-bold leading-none text-gray-800 bg-blue-500 w-full py-4 items-center"
  >
      Send Message
  </button>
</template>
