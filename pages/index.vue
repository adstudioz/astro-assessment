<template>
  <div>
    <Header />
    <div class="container relative">
      <div>
        <div class="px-10">
          <h1 class="text-28 mb-20">Available Channels</h1>
          <div class="md:flex mb-30">
            <form
              @submit.prevent="searchChannels()"
              class="w-full flex mb-40 md:mb-0"
            >
              <div
                class="input-div border-t-1 border-b-1 border-l-1 border-solid border-gray-300 flex py-6 px-14 items-center w-full"
              >
                <img
                  class="h-16 mr-10"
                  src="@/assets/icon/ic_search.svg"
                  alt="search"
                />
                <input
                  autofocus
                  id="search_channel"
                  placeholder="search"
                  name="search_channel"
                  v-model="searchInput"
                  class="w-full text-14 focus:outline-none rounded leading-normal"
                />
              </div>
              <div class="h-full">
                <button class="search px-20 focus:outline-none">Search</button>
              </div>
            </form>
            <div class="flex">
              <div class="sorting md:ml-14 flex items-center relative">
                <p class="absolute label">Sort By</p>
                <span class="mr-4" @click="sortChannels('channel-title')"
                  >Channel name</span
                >
                <span @click="sortChannels('channel-number')"
                  >Channel number</span
                >
              </div>
              <div
                class="filter ml-14 flex items-center"
                @click="showFilter = true"
              >
                <img
                  class="h-25"
                  src="@/assets/icon/ic_filter.svg"
                  alt="filter"
                />
              </div>
            </div>
          </div>
          <div class="selected-filter flex flex-wrap">
            <div
              v-for="selected in selectedCategories"
              :key="selected"
              class="mr-10 mb-10"
            >
              <span>{{ selected }}</span>
              <img
                class="ml-10 h-10"
                src="@/assets/icon/ic_close_white.svg"
                alt="remove"
                @click="addSelectedCategories(selected, -1, true)"
              />
            </div>
            <div
              v-for="selected in selectedLanguages"
              :key="selected"
              class="mr-10 mb-10"
            >
              <span>{{ selected }}</span>
              <img
                class="ml-10 h-10"
                src="@/assets/icon/ic_close_white.svg"
                alt="remove"
                @click="addSelectedLanguanges(selected, -1, true)"
              />
            </div>
            <div
              v-for="selected in selectedResolutions"
              :key="selected"
              class="mr-10 mb-10"
            >
              <span>{{ selected }}</span>
              <img
                class="ml-10 h-10"
                src="@/assets/icon/ic_close_white.svg"
                alt="remove"
                @click="addSelectedResolutions(selected, -1, true)"
              />
            </div>
          </div>
        </div>
        <div v-if="!isLoading">
          <div v-if="channels.length" class="flex flex-wrap justify-between">
            <NuxtLink
              :to="`channel/${channel.id}`"
              class="p-10 channel"
              v-for="(channel, index) in channels"
              :key="index"
            >
              <div class="channel-container p-20">
                <div class="flex mb-20">
                  <img
                    class="w-80 mr-16"
                    :src="channel.imageUrl"
                    :alt="`${channel.title} logo`"
                  />
                  <div>
                    <p class="text-14 font-light">{{ channel.title }}</p>
                    <p class="text-14 font-medium">CH{{ channel.stbNumber }}</p>
                  </div>
                </div>
                <div class="flex channel-info">
                  <div class="md:mr-10 mr-20">
                    <p class="current">On now</p>
                    <p v-if="channel.currentSchedule[1]">
                      {{ getTime(channel.currentSchedule[1].datetime) }}
                    </p>
                    <p v-else>N/A</p>
                    <p v-if="channel.currentSchedule[2]">
                      {{ getTime(channel.currentSchedule[2].datetime) }}
                    </p>
                    <p v-else>N/A</p>
                  </div>
                  <div>
                    <p class="current">
                      {{ truncateString(channel.currentSchedule[0].title, 30) }}
                    </p>
                    <p v-if="channel.currentSchedule[1]">
                      {{ truncateString(channel.currentSchedule[1].title, 30) }}
                    </p>
                    <p v-else>No information available</p>
                    <p v-if="channel.currentSchedule[2]">
                      {{
                        truncateString(channel.currentSchedule[2].title, 30)
                      }}}
                    </p>
                    <p v-else>No information available</p>
                  </div>
                </div>
              </div>
              <!-- <p>category: {{ channel.category }}</p>
              <p>language: {{ channel.language }}</p>
              <p>resolution: {{ `${channel.isHd ? 'HD' : 'SD'}` }}</p> -->
            </NuxtLink>
            <div class="p-10 channel"></div>
            <div class="p-10 channel"></div>
            <div class="p-10 channel"></div>
            <div class="p-10 channel"></div>
          </div>
          <div class="w-full flex items-center mt-100 flex-col" v-else>
            <img
              class="w-300"
              src="@/assets/image/img_not_found.svg"
              alt="not found"
            />
            <p class="mt-30 text-14">No channel found. Try search again.</p>
          </div>
        </div>
        <div v-else class="flex flex-wrap justify-between">
          <div
            v-for="loadingContainer in loadingContainers"
            :key="loadingContainer"
            class="p-10 channel"
          >
            <div class="channel-container p-20 channel-loading"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showFilter" class="modal h-full w-full">
      <div class="modal-container">
        <div class="mb-20">
          <h3 class="mb-10">Category</h3>
          <button
            @click="addSelectedCategories(category.value, index)"
            v-for="(category, index) in categories"
            :key="index"
            :class="`mr-10 mb-10 ${category.class}`"
          >
            {{ category.value }}
          </button>
        </div>
        <div class="mb-20">
          <h3 class="mb-10">Language</h3>
          <button
            @click="addSelectedLanguanges(language.value, index)"
            v-for="(language, index) in languages"
            :key="index"
            :class="`mr-10 mb-10 ${language.class}`"
          >
            {{ language.value }}
          </button>
        </div>
        <div class="mb-20">
          <h3 class="mb-10">Resolution</h3>
          <button
            @click="addSelectedResolutions(resolution.value, index)"
            v-for="(resolution, index) in resolutions"
            :key="index"
            :class="`mr-10 mb-10 ${resolution.class}`"
          >
            {{ resolution.value }}
          </button>
        </div>
        <div>
          <button
            class="w-full md:max-w-100 md:mr-10 mb-10"
            @click="applyFilters()"
          >
            Apply
          </button>
          <button class="w-full md:max-w-100 ghost" @click="resetFilters()">
            Reset
          </button>
        </div>
        <div class="close-button" @click="closeFilter()">
          <img
            class="h-20"
            src="@/assets/icon/ic_close_black.svg"
            alt="close"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { keys } from 'lodash';
import { Component, Vue, Provide } from 'vue-property-decorator';

export enum SortBy {
  ChannnelNumber = 'channel-number',
  ChannnelTitle = 'channel-title',
}

export enum Resolution {
  SD = 'SD',
  HD = 'HD',
}

export interface Data {
  responseCode: number;
  responseMessage: string;
  response: Channel[];
}

export interface Channel {
  id: number;
  title: string;
  description: null | string;
  isHd: boolean;
  stbNumber: string;
  language: Language;
  category: Category;
  originalImage: null | string;
  backupImage: null | string;
  imageUrl: string;
  isAstroGoExclusive: boolean;
  filters: Category[];
  detailUrl: string;
  currentSchedule: CurrentSchedule[];
}

export enum Category {
  AstroOnTheGo = 'Astro On The Go',
  Kids = 'Kids',
  Learning = 'Learning',
  Lifestyle = 'Lifestyle',
  Movies = 'Movies',
  Music = 'Music',
  News = 'News',
  Njoi = 'NJOI',
  Radio = 'Radio',
  SetTopBox = 'Set Top Box',
  SpecialInterest = 'Special Interest',
  Sports = 'Sports',
  TribeID = 'Tribe ID',
  TribePH = 'Tribe PH',
  VarietyEntertainment = 'Variety Entertainment',
}

export interface CurrentSchedule {
  eventId: string;
  title: string;
  programmeId: null | string;
  episodeId: null | string;
  datetime: Date;
  datetimeInUtc: Date;
  duration: string;
  siTrafficKey: string;
  detailUrl: string;
}

export enum Language {
  Chinese = 'Chinese',
  Indian = 'Indian',
  International = 'International',
  KoreanJapanese = 'Korean & Japanese',
  Malay = 'Malay',
  MultipleLanguage = 'Multiple Language',
}
export interface Filter {
  value: string;
  class: string;
}

@Component({})
export default class Index extends Vue {
  @Provide() channels: Channel[] = [];
  @Provide() rawChannels: Channel[] = [];
  @Provide() filteredChannels: Channel[] = [];
  @Provide() showFilter: boolean = false;

  @Provide() searchInput: string = '';
  @Provide() currentSorting: SortBy | null = null;
  @Provide() isLoading: boolean = true;

  @Provide() categories: Filter[] = [];
  @Provide() languages: Filter[] = [];
  @Provide() resolutions: Filter[] = [];

  @Provide() selectedCategories: string[] = [];
  @Provide() selectedLanguages: string[] = [];
  @Provide() selectedResolutions: string[] = [];

  @Provide() loadingContainers: number[] = [...Array(10).keys()];

  async created() {
    await this.fetchChannels();
  }

  async fetchChannels() {
    this.isLoading = true;
    const data: Data = (await this.$axios.get('/channel/all.json')).data;

    this.rawChannels = data.response;
    this.channels = data.response;
    this.filteredChannels = data.response;
    this.initializeFilter();

    this.isLoading = false;
  }

  async searchChannels(isFromRaw: boolean = false) {
    this.isLoading = true;

    let lookUpChannels: Channel[] = [];

    if (isFromRaw) {
      lookUpChannels = [...this.rawChannels];
    } else {
      lookUpChannels = [...this.filteredChannels];
    }

    if (!this.searchInput) {
      this.channels = [...lookUpChannels];
      this.isLoading = false;
      return;
    }

    this.channels = [];

    for (const channel of lookUpChannels) {
      if (
        channel.title.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        channel.stbNumber.toLowerCase().includes(this.searchInput.toLowerCase())
      ) {
        this.channels.push(channel);
      }
    }
    this.isLoading = false;
  }

  sortChannels(sortBy: SortBy) {
    this.isLoading = true;

    this.channels = this.channels.sort((channelA, channelB) => {
      if (sortBy === SortBy.ChannnelTitle) {
        return channelA.title.toLowerCase() > channelB.title.toLowerCase()
          ? 1
          : -1;
      } else {
        return channelA.stbNumber.toLowerCase() >
          channelB.stbNumber.toLowerCase()
          ? 1
          : -1;
      }
    });

    this.currentSorting = sortBy;
    this.isLoading = false;
  }

  addSelectedCategories(value: Category, index: number, isRefresh = false) {
    if (this.selectedCategories.includes(value)) {
      if (index === -1) {
        index = this.categories.findIndex((categorie) => {
          return categorie.value === value;
        });
      }

      this.categories[index].class = 'unselected';
      const selectedIndex = this.selectedCategories.indexOf(value);
      this.selectedCategories.splice(selectedIndex, 1);

      if (isRefresh) {
        this.applyFilters();
      }
    } else {
      this.categories[index].class = 'selected';
      this.selectedCategories.push(value);
    }
  }

  addSelectedLanguanges(value: Language, index: number, isRefresh = false) {
    if (this.selectedLanguages.includes(value)) {
      if (index === -1) {
        index = this.languages.findIndex((language) => {
          return language.value === value;
        });
      }

      this.languages[index].class = 'unselected';
      const selectedIndex = this.selectedLanguages.indexOf(value);
      this.selectedLanguages.splice(selectedIndex, 1);

      if (isRefresh) {
        this.applyFilters();
      }
    } else {
      this.languages[index].class = 'selected';
      this.selectedLanguages.push(value);
    }
  }

  addSelectedResolutions(value: Resolution, index: number, isRefresh = false) {
    if (this.selectedResolutions.includes(value)) {
      if (index === -1) {
        index = this.resolutions.findIndex((resolution) => {
          return resolution.value === value;
        });
      }

      this.resolutions[index].class = 'unselected';
      const selectedIndex = this.selectedResolutions.indexOf(value);
      this.selectedResolutions.splice(selectedIndex, 1);

      if (isRefresh) {
        this.applyFilters();
      }
    } else {
      this.resolutions[index].class = 'selected';
      this.selectedResolutions.push(value);
    }
  }

  applyFilters() {
    this.isLoading = true;
    this.filteredChannels = [...this.rawChannels];

    this.filteredChannels = this.filteredChannels.filter((channel) => {
      let isSelectedCategory = false;
      let isSelectedLanguage = false;
      let isSelectedResolution = false;

      const resolution = channel.isHd ? 'HD' : 'SD';

      if (
        !this.selectedCategories.length ||
        this.selectedCategories.includes(channel.category)
      ) {
        isSelectedCategory = true;
      }

      if (
        !this.selectedLanguages.length ||
        this.selectedLanguages.includes(channel.language)
      ) {
        isSelectedLanguage = true;
      }

      if (
        !this.selectedResolutions.length ||
        this.selectedResolutions.includes(resolution)
      ) {
        isSelectedResolution = true;
      }

      return isSelectedCategory && isSelectedLanguage && isSelectedResolution;
    });

    this.channels = [...this.filteredChannels];

    this.reapplySearchAndSort();

    this.isLoading = false;
    this.showFilter = false;
  }

  resetFilters() {
    this.isLoading = true;

    this.selectedCategories = [];
    this.selectedLanguages = [];
    this.selectedResolutions = [];

    this.initializeFilter();

    this.channels = [...this.rawChannels];
    this.reapplySearchAndSort();

    this.showFilter = false;
    this.isLoading = false;
  }

  reapplySearchAndSort() {
    if (this.searchInput) {
      this.searchChannels();
    }
    if (this.currentSorting) {
      this.sortChannels(this.currentSorting);
    }
  }

  closeFilter() {
    this.showFilter = false;
  }

  initializeFilter() {
    this.categories = Object.values(Category).map((category) => {
      return { value: category, class: 'unselected' };
    });
    this.languages = Object.values(Language).map((language) => {
      return { value: language, class: 'unselected' };
    });
    this.resolutions = Object.values(Resolution).map((resolution) => {
      return { value: resolution, class: 'unselected' };
    });
  }

  truncateString(text: string, limit: number) {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  }

  getTime(time: Date) {
    return this.$dayjs(time).format('hh:mm a');
  }
}
</script>
